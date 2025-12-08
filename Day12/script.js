
// Fetch first 20 todos

async function fetchTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    return todos.slice(0, 20);     // first 20 only
}


// Store todos in LocalStorage

function storeTodos(todos) {
    localStorage.setItem("Todos", JSON.stringify(todos));
}


// Retrieve todos from LS

function getStoredTodos() {
    return JSON.parse(localStorage.getItem("Todos")) || [];
}


// Delete a todo by id

function deleteTodo(id) {
    let todos = getStoredTodos();
    todos = todos.filter(todo => todo.id !== id);
    storeTodos(todos);
    renderTodos();    // re-render UI
}


// Render UI

function renderTodos() {
    const container = document.querySelector(".container");
    container.innerHTML = ""; // clear UI

    const todos = getStoredTodos();

    todos.forEach(todo => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.background = "beige";
        card.style.padding = "10px";
        card.style.margin = "10px";
        card.style.borderRadius = "8px";

        card.innerHTML = `
            <p><strong>Title:</strong> ${todo.title}</p>
            <p><strong>Completed:</strong> ${todo.completed}</p>
        `;

        const btn = document.createElement("button");
        btn.innerText = "Delete";
        btn.className = "btn";
        btn.dataset.id = todo.id;

        // Delete logic
        btn.addEventListener("click", (e) => {
            const id = Number(e.target.dataset.id);
            deleteTodo(id);
        });

        card.appendChild(btn);
        container.appendChild(card);
    });
}


// Initialize App

async function init() {
    // If no data stored → fetch and store
    if (!localStorage.getItem("Todos")) {
        const todos = await fetchTodos();
        storeTodos(todos);
    }

    renderTodos();
}

init();
