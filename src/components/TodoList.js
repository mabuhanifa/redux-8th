import { useDispatch, useSelector } from "react-redux";
import { useGetTodosQuery } from "../redux/features/apiSlice";
import Todo from "./Todo";

export default function TodoList() {
  const { filters } = useSelector((state) => state.filters);
  const { data, isLoading } = useGetTodosQuery();
  console.log(filters);
  const dispatch = useDispatch();

  const filterByCompleted = (todo) => {
    return todo.completed !== true;
  };
  const filterByStatus = (todo) => {
    if (filters ==='All') {
      return todo;
    }
    else{
      return todo.completed ===filters;
    }
  };

  // const filterByColors = (todo) => {
  //   const { colors } = filters;
  //   if (colors.length > 0) {
  //     return colors.includes(todo?.color);
  //   }
  //   return true;
  // };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {
        // .filter(filterByStatus)
        // .filter(filterByColors)
        // .filter(filterByCompleted)

        data?.filter(filterByStatus).map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))
      }
    </div>
  );
}
