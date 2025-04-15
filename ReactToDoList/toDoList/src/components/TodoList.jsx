import React ,{useEffect,useState} from 'react';

function TodoList(){
    const [input,setInput] = useState([]);
    const [task,setTask] = useState([]);
    const handleChange = (e)=>{
        setInput(e.target.value)
        
    }

    const handleAddTask =() =>{
        console.log("Added task")
        setTask([...task,input])
    }
    return <div>
        <h1>To do list</h1>
        <input type="text" placeholder="Enter your to do's" onChange={handleChange}/>
        <button className="Add-task-btn" onClick={handleAddTask}>Add Task</button>
        <ol>
            <li>
            {task.map() }
            </li>
        </ol>
    </div>
}

export default TodoList;