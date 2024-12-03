import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import{addData} from '../Slise'
export default function () {
    const [task, setTask] = useState("");
    const [priyority, setPriyority] = useState("");

    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.iudKey.data;
    });

    const handlesubmit = () => {
        let obj = { id: Date.now(), task, priyority };
        dispatch(addData(obj));
        setTask("");
        setPriyority("");
        console.log(data);
        
    }
    return (
        <div>
            <h1>REDUX-IUD</h1>
            <input type='name' placeholder='enter a name' onChange={(e) => setTask(e.target.value)} value={task} />
            <input type='name' placeholder='enter a priyorite' onChange={(e) => setPriyority(e.target.value)} value={priyority} />
            <button onClick={handlesubmit}>Submit</button>
            {data &&
                data.map((e, i) => {
                    return(
                    <ul key={i}>
                        <li>{i + 1}</li>
                        <li>{e.task}</li>
                        <li>{e.priyority}</li>
                    </ul>
                    )

                }
                )

            }

        </div>
    )
}

