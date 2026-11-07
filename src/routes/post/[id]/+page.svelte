<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { deleteTodo } from "#lib/api.js";

  let { data } = $props();
  const post = $derived(data.todos.find((p) => String(p.id) === page.params.id));

  async function remove() {
    await deleteTodo(post.id);
    await goto("/", { refreshAll: true });
  }
</script>

{#if post}
  <div>
    <h1>{post.subject}</h1>
    <h2>{post.details}</h2>
    <a href="/"><button>Back to Main</button></a>
    <a href="/edit/{post.id}"><button>Edit the Todo</button></a>
    <button onclick={remove}>Delete Todo</button>
  </div>
{:else}
  <p>Not found.</p>
{/if}
