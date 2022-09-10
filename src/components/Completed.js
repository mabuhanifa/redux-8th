import React from "react";
import { useGetTodosQuery } from "../redux/features/apiSlice";
import CompletedTodos from "./CompletedTodos";

const Completed = () => {
  const { data, isLoading } = useGetTodosQuery();
  const filterByCompleted = (todo) => {
    return todo.completed === true;
  };
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      <p className="my-5">Completed Tasks</p>
      {data?.filter(filterByCompleted).map((todo) => (
        <CompletedTodos todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default Completed;
