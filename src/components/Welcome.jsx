import { useContext } from "react";
import TodoItemsContext from "../store/items-store";

const Welcome = () => {
    const {todoItems} = useContext(TodoItemsContext);
    return todoItems.length === 0 && <h5>No items pending</h5>
}

export default Welcome;