import { ADD_TODO, DELETE_TODO } from './actionType';

const initialState = {todo:[]};

const toDoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id: state.todo.length + 1, 
                key: state.todo.length + 1,
                name: action.payload
              };
            return {...state, todo: [...state.todo, newTodo]};
        case DELETE_TODO:
            return {...state, todo: state.todo.filter(todo => todo.id !== action.payload)};
        default:
            return state;
    }
}

export default toDoReducer;
