// Seleção de elementos 
const todoform = document.querySelector('#todo-form');
const todoinput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editform = document.querySelector('#edit-form');
const canceleditBtn = document.querySelector('#cancel-edit-btn');
const searchinput  = document.querySelector('#search-input');
const erasebtn  = document.querySelector('#erase-button');
const filterbtn  = document.querySelector('#filter-select');

let oldInputvalue;

// funçoes
const saveTodo = (text, done= 0, save = 1) =>{
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle= document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const donebtn = document.createElement("button");
    donebtn.classList.add("finish-todo");
    donebtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(donebtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn);
 
    todoList.appendChild(todo);

    todoinput.value = " ";
    todoinput.focus();
    
    
};

const toggleForms = () => {
    editform.classList.toggle("hide");
    todoform.classList.toggle("hide");
    todoList.classList.toggle("hide");
}
  

const updateTodo = (text) =>{
    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo)=>{
         let todoTitle = todo.querySelector("h3")

         if(todoTitle.innerText === oldInputvalue){
            todoTitle.innerText = text;
         }
    } )
}


//Eventos 
todoform.addEventListener("submit", (e)=>{
    e.preventDefault();
   
    const inputValue = todoinput.value;

    if(inputValue){
        saveTodo(inputValue);
    }

});


document.addEventListener("click", (e)=>{
    const targetEl = e.target
    const parentEl = targetEl.closest("div");
    let todoTitle;


    if(parentEl && parentEl.querySelector("h3")){
      todoTitle = parentEl.querySelector("h3").innerHTML;
    }

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done");

    }


    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }


    if(targetEl.classList.contains("edit-todo")){
       toggle.Forms();

       editinput.value = todoTitle;
       oldInputvalue = todoTitle;

    }
})


canceleditBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    toggleForms();
});

editform.addEventListener("submit", (e) => {
   e.preventDefault()
   const editInputValue = editinput.value


   if(editInputValue){
    // atualizar
    updateTodo(editInputValue)
   }

   toggleForms();

})

