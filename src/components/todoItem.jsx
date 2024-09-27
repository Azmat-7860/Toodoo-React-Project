import { MdAutoDelete } from "react-icons/md";
function TodoItem({ todoName, todoDate, onDlt }) {
  // let todoName = "JS practice";
  // let todoDate = "10/01/2024";
  return (
    <div className="container py-2 text-center ">
      <div className="row">
        <div className="col-5  text-start fontclass">{todoName}</div>
        <div className="col-4  text-start fontclass">{todoDate}</div>
        <div className="col-3">
          <button
            onClick={(event) => onDlt(todoName)}
            type="button"
            className="btn btn-danger my-button"
          >
            <MdAutoDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
