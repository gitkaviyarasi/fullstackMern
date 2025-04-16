import React ,{useEffect,useState} from 'react';

function TodoList(){
    const [input,setInput] = useState("");
    const [task,setTask] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log("Loaded from localStorage:", localStorage.getItem('todos'));
        const savedTasks = JSON.parse(localStorage.getItem('todos')) || [];
        setTask(savedTasks);
        setLoaded(true);
    }, []);

      // Save tasks to localStorage whenever they change
      useEffect(() => {
        if (loaded) {
          localStorage.setItem('todos', JSON.stringify(task));
        }
      }, [task, loaded]);

    const handleChange = (e)=>{
        setInput(e.target.value)
        
    }

    const handleAddTask =() =>{
        if(input.trim()!==""){
            console.log("Added task")
            setTask([...task,input])
            setInput("")
        }
        
    }

    function deleteTask(index){
        const updatedTask = task.filter((element,i)=>i !== index);
        setTask(updatedTask);
        console.log("task delete pressed")
    }

    function moveUpTask(index){
        if(index > 0){
            const updatedTask = [...task];
            [updatedTask[index],updatedTask[index-1]] = [updatedTask[index -1],updatedTask[index]];
            setTask(updatedTask);
        }
    }

    function moveDownTask(index){
        if(index < task.length - 1){
            const updatedTask = [...task];
            [updatedTask[index],updatedTask[index+1]] = [updatedTask[index +1],updatedTask[index]];
            setTask(updatedTask);
        }
    }
    return <div className='toDoList'>
        <h1>To do list</h1>
        <div>
        <input type="text" placeholder="Enter your to do's" 
        onChange={handleChange}
        value={input}
        />
        <button className="Add-task-btn" onClick={handleAddTask}>Add Task</button>
        </div>
        
        <ol>
            
            {task.map((task,index)=>
            <li key={index}>
             <span className='text'> {task}</span>  
             <button className='delete-btn' onClick={()=>deleteTask(index)}>Delete</button>
             <button className='move-btn' onClick={()=>moveUpTask(index)}>Up</button>
             <button className='move-btn' onClick={()=>moveDownTask(index)}> Down</button>
             
</li>
             )}
            
        </ol>
    </div>
}

export default TodoList;