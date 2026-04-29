import { initState, state, setState } from "./state.js";
import { render } from "./ui.js";

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");

// INIT
initState();
updateUI();

// ADD TODO
addBtn.addEventListener("click", () => {
    if (!input.value.trim()) return;

    const newTodo = {
        id: Date.now(),
        text: input.value,
        completed: false
    };

    setState([...state.todos, newTodo]);
    input.value = "";
    updateUI();
});

// TOGGLE
function toggleTodo(id) {
    const updated = state.todos.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
    );

    setState(updated);
    updateUI();
}

// DELETE
function deleteTodo(id) {
    const updated = state.todos.filter(t => t.id !== id);
    setState(updated);
    updateUI();
}

// RENDER WRAPPER
function updateUI() {
    render(toggleTodo, deleteTodo);
}
