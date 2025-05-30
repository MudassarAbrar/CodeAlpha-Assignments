function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const li = document.createElement("li");
    li.innerHTML = `
      <span onclick="toggleComplete(this)">${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)">❌</button>
    `;
  
    document.getElementById("taskList").appendChild(li);
    taskInput.value = ""; // clear input
  }
  
  function toggleComplete(element) {
    element.parentElement.classList.toggle("completed");
  }
  
  function deleteTask(button) {
    button.parentElement.remove();
  }
  