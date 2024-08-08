import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<{ todoName: string }[]>([]);

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList([...todoList, { todoName: todo }]);
    setTodo("");
  };

  const handleDelete = (index: number) => {
    const newTodoList = todoList.filter((_, todoIndex) => todoIndex !== index);
    setTodoList(newTodoList);
  }

  return (
    <div className="bg-gray-200 w-full h-screen flex items-center">
      <div className="w-[500px] mx-auto text-center bg-white p-5">
        <h1 className="text-5xl font-bold mb-8">Todo List</h1>
        <form onSubmit={addTodo}>
          <input
            className="border-2 border-black w-full p-5 placeholder:text-gray-500 rounded-lg mb-6"
            type="text"
            placeholder="Enter your todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-black py-3 px-8 rounded-lg mb-6"
          >
            Add Todo
          </button>
        </form>
        <div className="todo-show-area">
          <ul>
            {todoList.map((singleTodo, index) => {
              return(
                <li 
                key={index}
                className="bg-black flex justify-between text-white py-5 rounded-lg text-3xl px-5 mb-2">
                  {singleTodo.todoName}{" "}
                  <span 
                  onClick={() => handleDelete(index)}
                  className="text-red-600 cursor-pointer">x</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
