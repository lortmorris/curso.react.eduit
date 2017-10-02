
const addTodo = title => ({
  type: 'ADD_TODO',
  title,
});

const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id,
});

const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

const actions = {
    addTodo,
    removeTodo,
    toggleTodo,
};

module.exports = actions;
