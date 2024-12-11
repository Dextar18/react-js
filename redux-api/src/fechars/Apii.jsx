import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, fetchApi, updateData } from '../Compo/Slice';

export default function Apii() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const [editId, setEditId] = useState(null);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, []);

  const record = useSelector((state) => {
    return state.ApiKey;
  });

  const addRecord = () => {
    if (editId == null) {
      let obj = { id: String(record.record.length + 1), image, title, description, price, rating };
      dispatch(addData(obj));
    } else {
      let updateObj = { id: editId, image, title, description, price, rating };
      dispatch(updateData({ editId, updData: updateObj }));
      setEditId(null);
    }

    setImage("");
    setTitle("");
    setDescription("");
    setPrice("");
    setRating("");
  };

  const deleteRecord = (i) => {
    dispatch(deleteData(i));
  };

  const updateRecord = (e) => {
    setEditId(e.id);
    setImage(e.image);
    setTitle(e.title);
    setDescription(e.description);
    setPrice(e.price);
    setRating(e.rating);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      <h1 className="header">API CRUD Operation</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter Image Url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Enter Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="input-field"
        />
        <button onClick={addRecord} className="submit-btn">
          {editId ? "Update Data" : "Add Data"}
        </button>
      </div>

      <div className="record-container">
        {record.loading === false &&
          record.record.map((e, i) => (
            <div key={i} className="record-card">
              <img src={e.image} alt={e.title} className="record-image" />
              <div className="record-details">
                <h2 className="record-title">{e.title}</h2>
                <p className="record-description">{e.description}</p>
                <p className="record-price">${e.price}</p>
                <p className="record-rating">Rating: {e.rating} ⭐</p>
              </div>
              <div className="record-actions">
                <button onClick={() => updateRecord(e)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => deleteRecord(e.id)} className="delete-btn">
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
