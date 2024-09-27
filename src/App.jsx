import AddTodo from "./components/addTodo";
import AppName from "./components/appName";
import { useState } from "react";

import "./Index.css";
import TodoItems from "./components/todoItems";
import ErrorMsg from "./components/errorMsg";
import { TodoItemContext } from "../../../ContextAPI-todo/src/store/item-store";

function App() {
  const InitialTodoobject = [
    {
      name: "Go to gym",
      date: "2024-08-16T15:35",
    },
    {
      name: "Book reading",
      date: "2024-08-16T15:35",
    },
    {
      name: "react project",
      date: "2024-08-16T15:35",
    },
  ];

  let [todoobject, setTodoObject] = useState(InitialTodoobject);

  const handleAddButton = (itemName, dueDate) => {
    // console.log(`Item name is :${itemName} & Date :${dueDate}`);
    let newTodoitem = [
      {
        name: itemName,
        date: dueDate,
      },
      ...todoobject,
    ];
    setTodoObject(newTodoitem);
  };

  // Example usage:
  //
  // console.log(updatedTodos);

  const handleDltData = (deleteItem) => {
    const updatedTodos = todoobject.filter((item) => item.name !== deleteItem);

    setTodoObject(updatedTodos);
  };

  return (
    <div className="appBody">
      <AppName />
      <AddTodo onAddButton={handleAddButton} />
      <ErrorMsg todoobj={todoobject} />
      <TodoItems todoobj={todoobject} onDelete={handleDltData} />
    </div>
  );
}

export default App;
