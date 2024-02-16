import React from 'react'
import { useState } from 'react'

function TodoInput(props) {

    const [inputText, setInputText] = useState('');

    const inputHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitHandler = (e) => {
        props.addList(inputText);
        setInputText('')
    };

  return (
    <>
        <div className="input-container">
            <input type = 'text' className='input-box-todo' 
            placeholder='Add a new task'
            value={inputText}
            onChange={inputHandler}
            ></input>
            <button className='add-btn' onClick= {submitHandler}>+</button>
        </div>
        
    </>
  )
}

export default TodoInput