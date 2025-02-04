import React, { useState } from "react";
import Header from "../components/Header";
import useTodoList from "../store/useTodoList";

function Todo() {
  const [task, setTask] = useState("");
  const { todos = [], addTodo, removeTodo, toggleTodo } = useTodoList();

  const handleAddTodo = () => {
    if (task.trim() == "") return;
    addTodo(task);
    setTask("");
  };

  return (
    <>
      <Header />
      <div className="p-4 max-w-md mx-auto bg-white dark:bg-black shadow-md rounded-lg">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border px-4 py-2 flex-1 rounded-md dark:text-white"
            placeholder="New Task..."
          />
          <button
            onClick={handleAddTodo}
            className="cursor-pointer px-4 py-2 rounded-md bg-black dark:bg-white text-white dark:text-black"
          >
            Qo'shish
          </button>
        </div>

        {todos.length == 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Hozircha vazifalar yo'q...
          </p>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center p-2 border rounded-md"
              >
                <span
                  onClick={() => toggleTodo(todo.id)}
                  className={`cursor-pointer flex-1 text-black dark:text-white ${
                    todo.completed
                      ? "line-through text-gray-500 dark:text-gray-400"
                      : ""
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer text-lg"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Todo;
