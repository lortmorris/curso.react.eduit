
class Todos{
  constructor(){
    this.Todos = [];
  }

  addTodo(todo, completed){
    var completed = completed || false;
    this.Todos.push({todo: todo, completed: completed});
    return this.Todos;
  }

  toggle(index){
    this.Todos[index].completed = !this.Todos[index].completed;
    return this.Todos[index];
  }

  getAll(){
    return this.Todos;
  }
}



const todosObj = new Todos();
const todosObj2 = new Todos();

todosObj.addTodo('crear una class', false);
todosObj.addTodo('crear un metodo', false);
todosObj2.addTodo('restore database', false);
todosObj2.addTodo('create package', false);
todosObj.addTodo('run project', false);
todosObj.toggle(0);
//todosObj.toggle(0);
//todosObj.toggle(0);
console.log(todosObj.getAll());
