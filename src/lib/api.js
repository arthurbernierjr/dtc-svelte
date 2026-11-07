import { VITE_API_URL as API } from "$app/env/public";

const headers = { "Content-Type": "application/json" };

// `fetch` is passed in so load functions can use SvelteKit's fetch
export async function getTodos(fetch = globalThis.fetch) {
  const response = await fetch(`${API}/todos`);
  if (!response.ok) throw new Error(`GET ${API}/todos failed: ${response.status}`);
  return response.json();
}

export function createTodo(todo) {
  return fetch(`${API}/todos`, { method: "POST", headers, body: JSON.stringify(todo) });
}

export function updateTodo(id, todo) {
  return fetch(`${API}/todos/${id}`, { method: "PUT", headers, body: JSON.stringify(todo) });
}

export function deleteTodo(id) {
  return fetch(`${API}/todos/${id}`, { method: "DELETE" });
}
