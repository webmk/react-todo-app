import { useContext } from "react";
import TodoItem from "./TodoItem"
import TodoItemsContext from "../store/items-store";

const TodoItems = () => {
    //const items = props.todoItems;
    const objContext = useContext(TodoItemsContext);
    const items = objContext.todoItems;
    const handleDeleteItem = objContext.handleDeleteItem
    return ( <>
    {items.map((item) => <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate} handleDeleteBtn={handleDeleteItem}/>)}
    </>
)
}

export default TodoItems;