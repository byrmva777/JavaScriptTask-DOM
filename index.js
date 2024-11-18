const todoTitleInput = document.getElementById("todoTitleInput");
const todoDescInput = document.getElementById("todoDescInput");
const addTodoItem = document.getElementById("addTodoItem");

const todoItems = [];
const container = document.getElementById("container");

addTodoItem.addEventListener("click", () => {        
    const title = todoTitleInput.value;
    const description = todoDescInput.value;
 
    if (title.trim() && description.trim()) 
    {
        const todoData = {
            title: title,
            desc: description
        };
     
        todoItems.push(todoData);
        console.log(todoItems);

        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        h3.innerText = title;
        p.innerText = description;

        div.appendChild(h3);
        div.appendChild(p);
        container.appendChild(div);
      
        todoTitleInput.value = "";
        todoDescInput.value = "";
    } 
    else 
    {
        alert("Melumat daxil etmediniz!!!");
    }
});