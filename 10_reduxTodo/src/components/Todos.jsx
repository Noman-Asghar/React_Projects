import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo, } from "../redux/slices/todo/todoSlice";

const Todos = ({ setInput, setIsEditable }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEditTodo = (todo) => {
    setInput(todo.text);
    setIsEditable(todo.id);
  };

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={` py-3 md:px-5 px-2 items-center flex justify-between my-2 text-white rounded-lg ${todo.completed ? "bg-green-300" : " bg-blue-400"}`}
        >
           <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))}  className="md:w-5 md:h-5 "/>
          <p className={` font-bold md:text-3xl text-[15px] ${todo.completed ? "line-through decoration-black" : ""}`}>{todo.text}</p>
         <div className=" font-bold md:text-lg  text-[13px]">
             <button
            className="bg-red-600 text-white md:py-3 md:px-6 py-2 px-2 md:rounded-lg rounded-md mx-2"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            Delete
          </button>
          <button
            className="bg-green-600 text-white md:py-3 md:px-6 py-2 px-2 md:rounded-lg rounded-md  mx-2"
            onClick={() => handleEditTodo(todo)}
          >
            Update
          </button>
         </div>
        </div>
      ))}
    </>
  );
};

export default Todos;
