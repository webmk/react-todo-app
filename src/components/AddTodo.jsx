import { useContext, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import TodoItemsContext from "../store/items-store";

const AddTodo = () => {
    const objContext = useContext(TodoItemsContext);
    const newTodoItem = objContext.handleNewTodoItem;
    const [itemName, setItemName] = useState("");
    const [itemDate, setItemDate] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const isFormValid = itemName.trim() !== "" && itemDate.trim() !== "";
    const handleItemName = (event)=>{
        setItemName(event.target.value);
        if (submitted) setSubmitted(false);
    }
    const handleItemDate = (event) => {
        setItemDate(event.target.value);
        if (submitted) setSubmitted(false);
    }
    const handleAddButton = () => {
        setSubmitted(true);
        if (isFormValid){
        newTodoItem(itemName, itemDate);
        setItemName("");
        setItemDate("");
        setSubmitted(false);
        }
    }
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-6">
                    <input type="text" className="form-control" placeholder="Enter Todo here" value={itemName} onChange={handleItemName} />
                    {submitted && !itemName.trim() && (
                            <small className="text-danger">Todo name is required.</small>
                        )}
                </div>
                <div className="col-4">
                    <input type="date" className="form-control" aria-label="due date" value={itemDate} onChange={handleItemDate} />
                    {submitted && !itemDate.trim() && (
                            <small className="text-danger">Date is required.</small>
                        )}
                </div>
                <div className="col-2">
                    <BiAddToQueue
                        size={28}
                        onClick={handleAddButton}
                        style={{ cursor: "pointer", color: "#007bff" }}
                        title="Add Todo"
                    />
                    {/* <button type="button" className="btn btn-primary" onClick={handleAddButton}>Add</button> */}
                </div>
            </div>
        </div>
    );
}

export default AddTodo;