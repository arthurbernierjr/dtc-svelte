<script>
  import { goto } from "$app/navigation";
  import { createTodo } from "#lib/api.js";
  import TodoForm from "#lib/TodoForm.svelte";

  async function save(todo) {
    await createTodo(todo);
    await goto("/", { refreshAll: true });
  }
</script>

<TodoForm onsave={save} />
