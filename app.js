let addToDoButton= document.getElementById('newTask');
let toDoContainer = document.getElementById('todoContainer');
let inputs = document.getElementById('inputs');
let clearAll= document.getElementById('clear');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText ="-"+inputs.value;
    toDoContainer.appendChild(paragraph);
    inputs.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration ="line-through";
    })
    
})

clearAll.addEventListener('click', function(){
    while(todoContainer.firstChild){
        todoContainer.removeChild(todoContainer.firstChild);
    }
})