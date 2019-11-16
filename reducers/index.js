
const initialState = {
	todos:[]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_TODOS':
      return state.todos;

    case 'ADD_TODO':
    console.log(action.payload)
    	return {
    		...state,
    		todos:state.todos.concat(action.payload)
    	}

   	case 'DELETE_TODO':
    	return {
    		...state,
    		todos:state.todos.filter(todo=>todo.id!==action.payload)
    	}
    default:
      return state;
  }
};

export default todoReducer;