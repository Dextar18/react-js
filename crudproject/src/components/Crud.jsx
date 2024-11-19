import React, { useEffect, useState } from 'react'

export default function Crud() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [gender, setGender] = useState("");
    const [record, setRecord] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Students")) || [];
        setRecord(data);
    }, []);

    const handleSubmit = () => {
        if (editIndex === null) {
            const obj = { id: Date.now(), name, age, city, gender };
            const updatedRecord = [...record, obj];
            setRecord(updatedRecord);
            localStorage.setItem("Students", JSON.stringify(updatedRecord));
        } else {
               const updatedRecord = record.map((item) =>
                item.id === editIndex ? { ...item, name, age, city, gender } : item
            );
            setRecord(updatedRecord);
            localStorage.setItem("Students", JSON.stringify(updatedRecord));
        }    
        setName("");
        setAge("");
        setCity("");
        setGender("");
        setEditIndex(null);
    };
    
    const handleDelete = (i) => {
        const data = record.filter((item) => item.id !== i);
        setRecord(data);
        localStorage.setItem("Students", JSON.stringify(data));
    };

    const handleEdit = (i) => {
        const singleData = record.find((item) => item.id === i);
        setEditIndex(singleData.id);
        setName(singleData.name);
        setAge(singleData.age);
        setCity(singleData.city);
        setGender(singleData.gender);
    };
  return (
    <div>
         <h1>CRUD with Local Storage</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <div>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Female
                </label>
            </div>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">Select City</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Miami">Miami</option>
            </select>

            <button onClick={handleSubmit}>
                {editIndex === null ? "Submit" : "Update"}
            </button>

            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {record.map((e, i) => (
                        <tr key={e.id}>
                            <td>{i + 1}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.gender}</td>
                            <td>{e.city}</td>
                            <td>
                                <button onClick={() => handleEdit(e.id)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(e.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}    
    