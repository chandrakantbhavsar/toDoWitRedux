import { ADD_TODO, DELETE_TODO } from './actionType';

export const addTodos = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});
