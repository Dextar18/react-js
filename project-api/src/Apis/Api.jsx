import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Api() {
    
const [record,setRecord]=useState();
const[title,setTitle]=useState();
const[price,setPrice]=useState();
const [description, setDescription] = useState([]);
const[category,setCategory]=useState();
const[image,setImage]=useState();
const [EditingId, setEditingId] = useState(null);
useEffect(()=>{
    fetchApi();
},[])

const fetchApi= async()=>{
    const respons=await axios.get("http://localhost:2105/post");
    setRecord(respons.data)
}
console.log(record)
const addData=async()=>{
    if (EditingId) {
        const updatedRecord = { id: EditingId, title,price,category,description,image};
        await axios.put(`http://localhost:2105/post/${EditingId}`, updatedRecord);
        fetchApi();
        setEditingId(null);
    } else{
        let newData={id:String(record.length+1),title,price,category,description,image}
    await axios.post("http://localhost:2105/post",newData)
    setRecord([...record,newData])
    }
    
    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");

}
const deletData=async(id)=>{
    let Delete = await axios.delete(`http://localhost:2105/post/${id}`);
    fetchApi();
}
const EditDta = (e) => {
    // const editrecord = record.find((e) => e.id === id);
    // if (editrecord) {
      setEditingId(e.id);
      setTitle(e.title);
      setPrice(e.price);
      setDescription(e.description);
      setCategory(e.category);
      setImage(e.image);    
  };

  return (
        <div>
            <input type="text"placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="number"placeholder='Enter price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <input type="text"placeholder='Enter description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <input type="text"placeholder='Enter category' value={category} onChange={(e)=>setCategory(e.target.value)}/>
            <input type="text"placeholder='Enter image url' value={image} onChange={(e)=>setImage(e.target.value)}/>
            <button onClick={addData}>SUBMIT</button>
     
        <h1>Api Crud</h1>
        {record &&
        record.map((e,i)=>{
            return (<ul key={i}>
                <li>{e.id}</li>
                <li>{e.title}</li>
                <li>{e.price}</li>
                <li>{e.description}</li>
                <li>{e.category}</li>
                { <li><img src={e.image} style={{width:"50px",height:"50px"}} alt="" /></li> }
                <li><button onClick={() => deletData(e.id)}>DELETE</button></li>
                <li ><button onClick={() => EditDta(e)}>EDIT</button></li>
                {/* <li>{e.rating.rate}</li>
                <li>{e.rating.count}</li> */}
            </ul>)
        })
        }
    </div>
  )
}

