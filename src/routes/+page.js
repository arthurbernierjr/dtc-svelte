import { getTodos } from "#lib/api.js";

export async function load({ fetch }) {
  return { todos: await getTodos(fetch) };
}
