import { useContext, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import TodoItemsContext from "../store/items-store";

const AddTodo = () => {
    const objContext = useContext(TodoItemsContext);
    const newTodoItem = objContext.handleNewTodoItem;
    const [itemName, setItemName] = useState("");
    const [itemDate, setItemDate] = useState("");
    const handleItemName = (event)=>{
        setItemName(event.target.value);
    }
    const handleItemDate = (event) => {
        setItemDate(event.target.value);
    }
    const handleAddButton = () => {
        newTodoItem(itemName, itemDate);
        setItemName("");
        setItemDate("");
    }
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-6">
                    <input type="text" className="form-control" placeholder="Enter Todo here" value={itemName} onChange={handleItemName} />
                </div>
                <div className="col-4">
                    <input type="date" className="form-control" aria-label="due date" value={itemDate} onChange={handleItemDate} />
                </div>
                <div className="col-2">
                    <BiAddToQueue onClick={handleAddButton}/>
                    {/* <button type="button" className="btn btn-primary" onClick={handleAddButton}>Add</button> */}
                </div>
            </div>
        </div>
    );
}

export default AddTodo;