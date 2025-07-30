const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write some Task.");
    } else {
        const task = {
            text: inputBox.value,
            checked: false
        };

        const tasks = getTasksFromStorage();
        tasks.push(task);
        setTasksToStorage(tasks);
        renderTasks();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    const tasks = getTasksFromStorage();

    if (e.target.tagName === "LI") {
        const index = Array.from(listContainer.children).indexOf(e.target);
        tasks[index].checked = !tasks[index].checked;
        setTasksToStorage(tasks);
        renderTasks();
    } else if (e.target.tagName === "SPAN") {
        const index = Array.from(listContainer.children).indexOf(e.target.parentElement);
        tasks.splice(index, 1);
        setTasksToStorage(tasks);
        renderTasks();
    }
});

function deleteAllTasks() {
    if (listContainer.children.length === 0) {
        alert("No tasks to delete.");
        return;
    }

    const confirmDelete = confirm("Are you sure you want to delete all tasks?");
    if (confirmDelete) {
        localStorage.removeItem("taskData");
        renderTasks();
    }
}

// Utility functions
function getTasksFromStorage() {
    return JSON.parse(localStorage.getItem("taskData")) || [];
}

function setTasksToStorage(tasks) {
    localStorage.setItem("taskData", JSON.stringify(tasks));
}

function renderTasks() {
    const tasks = getTasksFromStorage();
    listContainer.innerHTML = "";

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task.text;
        if (task.checked) li.classList.add("checked");

        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
    });
}

// Initial load
renderTasks();
