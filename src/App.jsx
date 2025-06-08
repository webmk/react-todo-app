import { useState, useReducer } from 'react'
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import Welcome from './components/Welcome'
import TodoItemsContext from './store/items-store'

const reduce = (curentTodoItems, action) => {

  if(action.type === 'NEW_ITEM'){
    const newTodoItems = [...curentTodoItems, {name: action.payload.newItemName, dueDate: action.payload.newItemDate}];
    return newTodoItems;
  }
  else if(action.type === 'DELETE_ITEM'){
    const newTodoItems = curentTodoItems.filter(item => item.name !== action.payload.deleteItem);
    return newTodoItems;
  }
  return [];
}

function App() {
/*   const oldTodoItems = [
    {
      name: "Buy Milk", 
      dueDate: "26/05/2025"
    },
    {
      name: "Go to college", 
      dueDate: "27/05/2025"
    }
  ] */
  //const [todoItems, setTodoItems] = useState(reduce,[]);
  const [todoItems, dispatchTodoItems] = useReducer(reduce, [])
  const handleNewTodoItem = (newItemName, newItemDate) => {
    //setTodoItems([...oldTodoItems, {name: newItemName, dueDate: newItemDate}]);
    const newItemAction = {
      type: 'NEW_ITEM',
      payload: {
        newItemName,
        newItemDate
      }
    }
    dispatchTodoItems(newItemAction);
    //setTodoItems([{name: newItemName, dueDate: newItemDate}]);
  }
  const handleDeleteItem = (deleteItem) => {

    const deleteItems ={
      type: "DELETE_ITEM",
      payload: {
        deleteItem
      }
    }
    dispatchTodoItems(deleteItems);
    /* const newTodoItems = todoItems.filter(item => item.name !== deleteItem);
    setTodoItems(newTodoItems); */
  }
  return (
    <TodoItemsContext.Provider value={{todoItems, handleNewTodoItem, handleDeleteItem}}>
    <AppName />
    <AddTodo />
    <div className='item-container'>
    <Welcome />
    <TodoItems />
    </div>
    </TodoItemsContext.Provider>
  )
}

export default App
