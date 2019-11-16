export const listTodos = () => ({
  type: 'LIST_TODOS',
});

export const addTodo = (item) => {
	// console.log(item)
	return{
		  type: 'ADD_TODO',
		  payload: item,
	}
}

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: id,
});
