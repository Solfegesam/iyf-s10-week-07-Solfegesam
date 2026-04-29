import { loadTodos, saveTodos } from "./storage.js";

export const state = {
    todos: []
};

export function initState() {
    state.todos = loadTodos();
}

export function setState(newTodos) {
    state.todos = newTodos;
    saveTodos(state.todos);
}
