<script lang="ts">
  let counter = 0;

  const addToCounter = () => {
    counter += 1;
  };
</script>

<div class="container py-12 space-y-12">
  <h1 class="text-6xl font-bold">Welcome to meteor boilerplate</h1>

  <h2 class="text-4xl font-bold">Svelte ready</h2>
  <button on:click={addToCounter}>Click Me</button>
  <p>You've pressed the button {counter} times.</p>

  <h2>Typescript ready</h2>
  <p>Just add lang="ts" to .svelte components.</p>
</div>
