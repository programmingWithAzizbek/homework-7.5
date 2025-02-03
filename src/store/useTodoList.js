import { create } from "zustand";

const getTodosFromStorage = () => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};

function createTodoList(set) {
  return {
    todos: getTodosFromStorage(),

    addTodo: (newTask) =>
      set((state) => {
        const updatedTodos = [
          ...state.todos,
          { id: Date.now(), text: newTask, completed: false },
        ];
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        return { todos: updatedTodos };
      }),

    removeTodo: (id) =>
      set((state) => {
        const updatedTodos = state.todos.filter((todo) => todo.id != id);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        return { todos: updatedTodos };
      }),

    toggleTodo: (id) =>
      set((state) => {
        const updatedTodos = state.todos.map((todo) =>
          todo.id == id ? { ...todo, completed: !todo.completed } : todo
        );
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        return { todos: updatedTodos };
      }),
  };
}

const useTodoList = create(createTodoList);

export default useTodoList;
