document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementsByTagName("form");
  const inputs = document.querySelectorAll("input");
  const description = inputs[0];
  const submit = inputs[1];

  function newTask() {
    let task = document.createElement("li");
    const taskDescription = description.value;
    const text = document.createTextNode(taskDescription)
    task.appendChild(text)
    if (taskDescription === "") {
      alert("Nothing was written!");
    } else {
      document.getElementById("tasks").appendChild(task)
    }
    
  }
});
