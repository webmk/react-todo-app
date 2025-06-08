import { MdDelete } from "react-icons/md";
const TodoItem = (props) => {
    return (
    <div className="container text-center">
        <div className="row">
            <div className="col-6">
               {props.todoName}
            </div>
            <div className="col-4">
                {props.todoDate}
            </div>
            <div className="col-2">
                <MdDelete onClick={() => {props.handleDeleteBtn(props.todoName)}}/>
                {/* <button type="button" className="btn btn-danger" onClick={() => {props.handleDeleteBtn(props.todoName)}}>Delete</button> */}
            </div>
        </div><br/>
    </div>
    );
}

export default TodoItem;