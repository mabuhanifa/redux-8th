import { useSelector } from "react-redux";
import { useGetTodosQuery } from "../redux/features/apiSlice";
import Todo from "./Todo";

export default function TodoList() {
  const { filters, colors, clearAll, clearCompleted } = useSelector(
    (state) => state.filters
  );
 
  const { data: todos } = useGetTodosQuery();
  // const todos = data;

  const filterByStatus = (todo) => {
    if (filters === "All") {
      return todo;
    } else {
      return todo.completed === filters;
    }
  };

  const filterByColors = (todo) => {
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };
  const completeAll = (todo) => {
    if (!clearAll) {
      return todo;
    } else {
      return {
        ...todo,
        completed: true,
      };
    }
  };
  const clear = (todo) => {
    if (!clearCompleted) {
      return todo;
    } else {
      return todo.completed !== clearCompleted;
    }
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        ?.filter(filterByColors)
        .map(completeAll)
        .filter(clear)
        .filter(filterByStatus)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
}
