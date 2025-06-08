import { useContext } from "react";
import TodoItemsContext from "../store/items-store";

const Welcome = () => {
    const {todoItems} = useContext(TodoItemsContext);
    return todoItems.length === 0 && <h3>No items pending</h3>
}

export default Welcome;