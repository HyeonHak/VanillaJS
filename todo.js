const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-todoList");

const TODOS_LS = "toDos";

let toDos = [];

function filterFn(toDo) {
  return toDo.id !== 1;
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = toDos.length + 1;

  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: toDos.length + 1,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loaedToDos = localStorage.getItem(TODOS_LS);
  if (loaedToDos !== null) {
    const parsedToDos = JSON.parse(loaedToDos);
    parsedToDos.forEach((element) => {
      paintToDo(element.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
