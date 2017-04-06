


class Todos{
  constructor(cb){
    this.Todos = [];
    this.cb = cb;
    this.cursor = 0;
  }

  addTodo(todo={}){
    this.Todos = [...this.Todos , Object.assign({}, {title:'NO TITLE', completed: false, id: this.cursor++}, todo)];
    this.cb(this.Todos);
  }

  toggle(id){
    this.Todos = this.Todos.map( el=>{
      if(el.id === id) el.completed = !el.completed;
      return el;
    });
    this.cb(this.Todos);
  }

  remove(id){
    this.Todos = this.Todos.filter( todo => todo.id!== id);
    this.cb(this.Todos);
  }
}



const showTodo =({title, completed, id}) => `<li style="${completed ? 'color: green' : 'color: red'}"> ${id} : ${title} : ${completed}</li>`;
const showList = (Todos)=>{
  let html = '<ul>';
  Todos.forEach(todo =>{
    html+= showTodo(todo);
  });
  html+='</ul>';
  return html;
}

const myTodos = new Todos(Todos=>{
  document.body.innerHTML = showList(Todos);
});



myTodos.addTodo({ title: 'aprender Redux' });
myTodos.addTodo({ title: 'aprender React' });
myTodos.addTodo({ title: 'aprender Es6/Es7' });
myTodos.addTodo({ });
myTodos.toggle(2);
myTodos.remove(2);
