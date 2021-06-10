document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input");
  const description = inputs[0];
  const submit = inputs[1];

  submit.addEventListener('click', function(e) {
    e.preventDefault();
    newTask();
  });

  function newTask() {
    let task = document.createElement("li");
    const taskDescription = description.value;
    const text = document.createTextNode(taskDescription);
    const removeTask = document.createElement("button");
    removeTask.addEventListener('click', function(e) {
      task.remove(e);
    });
    removeTask.innerText = "X";
    removeTask.className = "remove";
    task.appendChild(text);
    task.appendChild(removeTask);
    if (taskDescription === "") {
      alert("Nothing was written.");
    } else {
      document.getElementById("tasks").appendChild(task)
    }
    taskDescription = "";
    
  }
});

