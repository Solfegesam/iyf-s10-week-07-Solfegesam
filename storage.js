const KEY = "todos_app";

export function saveTodos(todos) {
    localStorage.setItem(KEY, JSON.stringify(todos));
}

export function loadTodos() {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
}
