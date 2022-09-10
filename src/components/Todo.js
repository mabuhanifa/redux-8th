import { useState } from "react";
import { useDispatch } from "react-redux";
import cancelImage from "../assets/images/cancel.png";
import edit from "../assets/images/edit.png";
import save from "../assets/images/save.png";
import {
  useDeleteTodoMutation,
  useEditTodoMutation
} from "../redux/features/apiSlice";
export default function Todo({ todo }) {
  const { text, id, completed, color } = todo;
  const dispatch = useDispatch();
  const [deleteVideo] = useDeleteTodoMutation();
  const [editVideo, { isLoading, isError, isSuccess }] = useEditTodoMutation();
  const [editTodo, setEditTodo] = useState(false);
  const [value, setValue] = useState("");

  const handleStatusChange = (todoId) => {
    editVideo({
      id,
      data: {
        completed: !completed,
      },
    });
  };

  const handleColorChange = (todoId, color) => {};
  const val = (e) => {
    if (e.target.value === "") {
      setValue(text);
    } else {
      setValue(e.target.value);
    }
  };
  const handleDelete = (todoId) => {
    deleteVideo(todoId);
  };
  const updateTodo = (e) => {
    e.preventDefault();
    editVideo({
      id,
      data: {
        text: value,
      },
    });
    setEditTodo(false);
  };
  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleStatusChange(id)}
          className="opacity-0 absolute rounded-full"
        />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <form onSubmit={updateTodo} className="select-none flex-1">
        <input
          type="text"
          className={`w-96 placeholder-gray-700 p-0.5 ${
            completed && "placeholder-green-600"
          } ${editTodo && "bg-gray-200"}`}
          placeholder={text}
          disabled={!editTodo}
          defaultValue={text}
          onChange={val}
        />
      </form>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
          color === "green" && "bg-green-500"
        }`}
        onClick={() => handleColorChange(id, "green")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        }`}
        onClick={() => handleColorChange(id, "yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
          color === "red" && "bg-red-500"
        }`}
        onClick={() => handleColorChange(id, "red")}
      ></div>

      <img
        src={save}
        className={`${
          editTodo ? "flex-shrink-0 w-4 h-4 ml-2 cursor-pointer" : "hidden"
        }`}
        alt="Cancel"
        onClick={updateTodo}
      />
      <img
        src={edit}
        className={`${
          editTodo ? "hidden" : "flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        }`}
        alt="Edit"
        onClick={() => setEditTodo(true)}
      />
      <img
        src={cancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Save"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}
