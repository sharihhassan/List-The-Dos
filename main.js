// Select elements
const input = document.getElementById("txtBox");
const addButton = document.getElementById("btnAddToList");
const todoList = document.getElementById("todoList");
const todoForm = document.getElementById("todoForm");  // Select form to handle submission

// Function to add a task to the list
function addTask(task) {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = task;

    // Add a delete button (trash icon) to the list item
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&#128465;"; // Unicode for trash icon
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
        listItem.remove(); // Remove the task when delete is clicked
    });

    listItem.appendChild(deleteButton); // Append delete button to the list item
    todoList.appendChild(listItem); // Add list item to the unordered list
}

// Event listener for form submission (handles both button click and Enter key)
todoForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission (page refresh)

    const task = input.value.trim(); // Get input value and trim whitespace
    if (task === "") {
        alert("Please enter a task!"); // Show alert if input is empty
        return;
    }

    addTask(task); // Add the task to the list
    input.value = ""; // Clear the input field after adding the task
});

// You can remove the event listener for the button click now as the form itself handles it

// Optional: Add event listener for pressing 'Enter' key within the input field (this is handled by the form submit)
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default Enter key behavior (form submission)
        const task = input.value.trim();
        if (task !== "") {
            addTask(task); // Add task if not empty
            input.value = ""; // Clear input field after adding task
        } else {
            alert("Please enter a task!");
        }
    }
});
