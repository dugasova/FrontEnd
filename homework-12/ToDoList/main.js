const addTask = document.querySelector("#addTask");
const taskTitle = document.querySelector("#taskTitle");
const taskList = document.querySelector("#taskList");

addTask.addEventListener("click", (e) => {
  if (taskTitle.value === "") {
    alert("Please enter something");
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <div class="columns">
    <div class="column is-narrow"><input type="checkbox"></div>
    <div class="column"><p class="title is-4">${taskTitle.value}</p></div>
    <div class="column is-narrow"><button class="delete"></button></div>
    </div>    
    `;
  const checkBox = listItem.querySelector("input");
  checkBox.addEventListener("click", taskDone);

  const deleteButton = listItem.querySelector("button.delete");
  deleteButton.addEventListener("click", (e) => {
    listItem.remove();
  });

  taskList.appendChild(listItem);

  taskTitle.value = "";
});

function taskDone(event) {
  const taskName =
    event.target.parentElement.parentElement.querySelector("div.column p");
  taskName.style.textDecoration = event.target.checked
    ? "line-through"
    : "none";
}
