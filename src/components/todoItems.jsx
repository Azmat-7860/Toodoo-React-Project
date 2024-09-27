import TodoItem from "./todoItem";
const TodoItems = ({ todoobj, onDelete }) => {
  return (
    <>
      {todoobj.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
          onDlt={onDelete}
        />
      ))}
    </>
  );
};
export default TodoItems;
