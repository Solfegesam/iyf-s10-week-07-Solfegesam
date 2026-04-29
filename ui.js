import { state } from "./state.js";

const list = document.getElementById("todo-list");

export function render(onToggle, onDelete) {
    list.innerHTML = "";

    state.todos.forEach(todo => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span style="text-decoration:${todo.completed ? "line-through" : "none"}">
                ${todo.text}
            </span>
            <div>
                <button class="toggle">✔</button>
                <button class="delete">🗑</button>
            </div>
        `;

        li.querySelector(".toggle").addEventListener("click", () => {
            onToggle(todo.id);
        });

        li.querySelector(".delete").addEventListener("click", () => {
            onDelete(todo.id);
        });

        list.appendChild(li);
    });
}
