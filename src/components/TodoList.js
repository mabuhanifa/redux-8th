import { useDispatch } from "react-redux";
import { useGetTodosQuery } from "../redux/features/apiSlice";
import Todo from "./Todo";

export default function TodoList() {
  const { data, isLoading } = useGetTodosQuery();
  console.log(data);
  const dispatch = useDispatch();

  // const filterByCompleted = (todo) => {
  //   return todo.completed !== true;
  // };
  // const filterByStatus = (todo) => {
  //   const { status } = filters;
  //   switch (status) {
  //     case "Complete":
  //       return todo.completed;

  //     case "Incomplete":
  //       return !todo.completed;

  //     default:
  //       return true;
  //   }
  // };

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

        data?.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))
      }
    </div>
  );
}
