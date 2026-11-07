<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { updateTodo } from "#lib/api.js";
  import TodoForm from "#lib/TodoForm.svelte";

  let { data } = $props();
  const post = $derived(data.todos.find((p) => String(p.id) === page.params.id));

  async function save(todo) {
    await updateTodo(post.id, todo);
    await goto("/", { refreshAll: true });
  }
</script>

{#if post}
  <TodoForm initial={post} buttonLabel="Edit Todo" onsave={save} />
{:else}
  <p>Not found.</p>
{/if}
