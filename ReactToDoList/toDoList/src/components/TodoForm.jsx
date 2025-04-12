import React, { useState } from 'react';

function TodoForm(){
    const [input, setInput] = useState('');

    const handleChange = (e)=>{
        setInput(e.target.value);
    }

    const handleSubmit = (e)=>{
     e.preventDefault();
        console.log("form submitted")
        if (input.trim()){
            setInput([...input,{
                text:input,
                completed:false}

            ]);
            console.log(input)
            setInput('');
        }
     
    }
    return(
        <>
        <div>
            <h1>Form</h1>
            <p>Enter the to do's</p>
            <form onSubmit = {handleSubmit}>
            <input
            type="text"
            placeholder="Add your to do List"
            value={input}
            name="text"
            onChange={handleChange}
            />
            <button>Update</button>
            </form>

        </div>
        </>
    );
}

export default TodoForm;