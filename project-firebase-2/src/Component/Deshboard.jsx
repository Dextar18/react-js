import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function DashBoard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState();
  const [name, setName] = useState("");
  const [sub, setSub] = useState("");
  const [record, setRecord] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data.uid);
      }
    });
  }, []);

  useEffect(() => {
    fetchUser();
    fetchData();
  }, [user]);

  const fetchUser = async () => {
    if (user) {
      await getDoc(doc(db, 'Users', user)).then((data) => {
        setUserData(data.data());
      });
    }
  };

  const fetchData = async () => {
    await getDocs(collection(db, 'data')).then((data) => {
      let sameData = data.docs.filter((item) => item.data().uid === user);
      let details = sameData.map((item) => ({
        docId: item.id,
        ...item.data(),
      }));
      setRecord(details);
    });
  };

  const handleSubmit = async () => {
    if (editIndex == null) {
      await addDoc(collection(db, "data"), { name, sub, userId: user }).then((data) => {
        setRecord([...record, { name, sub, user }]);
      });
    } else {
      await updateDoc(doc(db, "data", editIndex), {
        name, sub, userId: user,
      });
      fetchData();
    }
    setName("");
    setSub("");
    setEditIndex(null);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "data", id))
      .then(() => {
        let remainingRecord = record.filter((item) => item.docId !== id);
        setRecord(remainingRecord);
      });
  };

  const handleEdit = async (id) => {
    let singleData = record.find((item) => item.docId === id);
    setEditIndex(id);
    setName(singleData.name);
    setSub(singleData.sub);
  };

  const signOut = () => {
    auth.signOut();
    navigate("/logIn");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Dashboard</h1>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px", padding: "8px", width: "200px" }}
        />
        <input
          type="text"
          placeholder="Enter Your Subject"
          value={sub}
          onChange={(e) => setSub(e.target.value)}
          style={{ marginRight: "10px", padding: "8px", width: "200px" }}
        />
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 20px",
            backgroundColor: editIndex ? "#007bff" : "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {editIndex ? "Update" : "Add Data"}
        </button>
      </div>
      <button
        onClick={signOut}
        style={{
          padding: "10px 20px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Sign Out
      </button>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {record && record.length > 0 ? (
          record.map((e, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "20px",
                width: "300px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <p><strong>User ID:</strong> {e.uid}</p>
              <p><strong>Name:</strong> {e.name}</p>
              <p><strong>Subject:</strong> {e.sub}</p>
              <p><strong>Doc ID:</strong> {e.docId}</p>
              <button
                onClick={() => handleDelete(e.docId)}
                style={{
                  padding: "8px 15px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginRight: "10px",
                  width:"150px"
                }}
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(e.docId)}
                style={{
                  padding: "8px 15px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginRight: "10px",
                  width:"150px"
                }}
              >
                Edit
              </button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#6c757d" }}>No records found.</p>
        )}
      </div>
    </div>
  );
}
