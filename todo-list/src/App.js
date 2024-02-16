import './App.css';
import './components/TodoInput'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import {useState, useEffect} from 'react';
function App() {

  // Convert the local storage to a JSON object
  const initialItems = JSON.parse(localStorage.getItem('todo')) || [];

  const [listTodo, setListTodo] = useState(initialItems);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(listTodo));
  }, [listTodo]);

  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  }

   const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
      <div className="main-container">
        <div className="center-container">
          <TodoInput addList= {addList}/>
          {listTodo.map((listItem, i) => {
            return (
              console.log(listItem),
            <TodoList key={i} index={i} text={listItem} deleteItem = {deleteListItem}/>
          )}
          )}
          {/* <TodoList listTodo={listTodo}/> */}

        </div>
      </div>
  );
}

export default App;
