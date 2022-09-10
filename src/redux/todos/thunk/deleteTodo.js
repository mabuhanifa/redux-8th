import { deleted } from "../actions";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    await fetch(`https://lws-json-redux.herokuapp.com/todos/${todoId}`, {
      method: "DELETE",
    });

    dispatch(deleted(todoId));
  };
};

export default deleteTodo;