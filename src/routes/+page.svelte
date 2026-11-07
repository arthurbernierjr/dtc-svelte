<script>
  let { data } = $props(); // { todos } from +page.js
</script>

<div>
  {#each data.todos as todo (todo.id)}
    <article>
      <a href="/post/{todo.id}"><h1>{todo.subject}</h1></a>
      <h2>{todo.details}</h2>
    </article>
  {/each}
</div>
