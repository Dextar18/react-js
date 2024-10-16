import React,{useState, useRef} from 'react'

export default function Todo() {
    const inputRef = useRef();
    const [items, setItems] = useState([]);

    const handleClick = () => {
        const newItem = inputRef.current.value;
        if(newItem.trim() !== ""){
            setItems([...items,newItem])
        }
        inputRef.current.value ='';
        inputRef.current.focus();
    };
  return (
    <div>
        <h1> to do list</h1>
        <input type='text' ref={inputRef}></input>
        <button onClick={handleClick}> add</button>
    
        <ul>
            {items.map((item,index) =>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    
    
    </div>
  )
}
