<script>
  let { children } = $props();
</script>

<div class="app">
  <h1>Our Todos</h1>
  <a href="/new"><button>Make New Todo</button></a>
  <main>
    {@render children()}
  </main>
</div>

<style>
  .app {
    text-align: center;
  }
</style>
