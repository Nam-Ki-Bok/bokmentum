const toDoListForm = document.querySelector(".toDoListForm");
const toDoInput = toDoListForm.querySelector("input");
const toDoList = document.querySelector(".toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteTodo(event) {
    const li = event.target.parentNode;
    toDoList.removeChild(li);
    const updatedToDos = toDos.filter(toDo => {
        return toDo.id !== parseInt(li.id);
    });
    toDos = updatedToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(toDo => {
            paintToDo(toDo.text);
        });
    }
}

function cleanToDoInput() {
    toDoInput.value = '';
}

function paintToDo(text) {
    cleanToDoInput();
    const li = document.createElement("li");
    const delBtn = document.createElement("span");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerHTML = "❌";
    delBtn.className = "delBtn";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text

    li.id = newId;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);

    const toDoObj = {
        id: newId,
        text: text
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const toDo = toDoInput.value;
    paintToDo(toDo);
}

function init() {
    loadToDos();
    toDoListForm.addEventListener("submit", handleSubmit);
}

init();