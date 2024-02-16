import React from 'react'

function TodoList(props) {

    const deleteItem = () => props.deleteItem(props.id)  

    const strikeText = () =>{
        let strike = document.querySelector('.list-Item');
        const currentStyle = strike.style.textDecoration;
        strike.style.textDecoration = currentStyle === 'line-through' ? 'none' : 'line-through';
}

  return (
    <li className="list-Item">
    <span className="icons">
    <i class="fa-solid fa-check" onClick={strikeText}></i>
    </span>
    {props.text}
    <span className='icons'>
    <i className="fa-solid fa-trash-can icon-delete" onClick={deleteItem}></i>
    </span>
    </li>
  )
}

export default TodoList