import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/slices/todo/todoSlice";

const AddTodo = ({ input, setInput, isEditable, setIsEditable }) => {
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    if (isEditable) {
      dispatch(updateTodo({ id: isEditable, text: input }));
      setIsEditable(null);
    } else {
      dispatch(addTodo(input));
    }

    setInput("");
  };

  return (
    <form onSubmit={handleAddTodo} className="flex mb-5">
      <input
        type="text"
        placeholder="Add your todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className=" lg:min-w-3xl  bg-gray-300 text-black py-3 px-4 outline-none rounded-l-lg font-bold hover:bg-gray-100 duration-200"
      />
      <button
        type="submit"
        className={`text-white font-bold rounded-r-lg py-4 px-5 ${isEditable ? "bg-green-400" : "bg-blue-500"}`}
      >
        {isEditable ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default AddTodo;
