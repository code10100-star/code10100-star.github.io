const addTodos = document.querySelector(".add-todos");
const todoList = document.querySelector(".todos");
const deleteB = document.querySelector('.delete');
const todos = JSON.parse(localStorage.getItem("todos")) || [];
const completed=JSON.parse(localStorage.getItem('completed')) || [];
let flag=0;
const haveDone=document.querySelector('.havedone');
function inputText(todos = [], todoList) {
  todoList.innerHTML = todos
    .map((todo, i) => {
      return ` <li class="mytodo">
    <input type="checkbox" class="checkbox" data-index=${i} id="todo${i}" ${
        todo.done ? "checked" : ""
      } />
      
    <label for="todo${i}" style="text-decoration:${(todo.done) ? 'line-through' : 'none'}">${todo.text}</label>
        </li>
    
    `;
    })
    .join("");
}
function addTodo(e) {
  console.log("working!!")
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };

  todos.push(item);
  // console.log(item);
  inputText(todos, todoList);
  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem('completed', JSON.stringify(completed));
  this.reset();
}
function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    console.log(index);

    if(flag==0){
    todos[index].done = !todos[index].done;
    completed.push(todos[index]);

    todos.splice(index,1);
    console.table(todos);
    console.table(completed);
    localStorage.clear();
    localStorage.setItem('completed', JSON.stringify(completed));
    localStorage.setItem('todos', JSON.stringify(todos));
    inputText(todos, todoList);
  }
    else{
      flag=11;
      completed[index].done= !completed[index].done;
      todos.push(completed[index]);
      completed.splice(index,1);
    console.table(completed);
    console.table(todos);


      localStorage.clear();
      localStorage.setItem('completed', JSON.stringify(completed));
      localStorage.setItem('todos', JSON.stringify(todos));
      showcompleted();
      

    }

  }
  function showcompleted(){
   
      todoList.innerHTML = completed.map((todo, i) => {
      return ` 
      <li class="mytodo">
    <input type="checkbox" class="checkbox" data-index=${i} id="todo${i}" ${
        todo.done ? "checked" : ""
      } />
      
    <label for="todo${i}" style="text-decoration:${(todo.done) ? 'line-through' : 'none'}">${todo.text}</label>
    </li>
  `;
    })
    .join("");
  
  
  }
function show(){
  if(flag==0){
    haveDone.innerHTML='Todo';
    flag=1;
    showcompleted();
  }
  else{
    flag=0;
    inputText(todos,todoList);
    haveDone.innerHTML='Completed';
  }
}
function deleteButton(){
  console.log('working');
  if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
  if(flag==0){
    completed.splice(index,1);
  }else{
    todos.splice(index,1);
  }
}
todoList.addEventListener('click',toggleDone);
addTodos.addEventListener("submit", addTodo);
haveDone.addEventListener('click',show);
deleteB.addEventListener('click',deleteButton);
inputText(todos, todoList);
