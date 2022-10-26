<script lang="ts">
  import Main from "./screens/Main.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Loading from "./components/Loading.svelte";
  import Text from "./components/Text.svelte";
  export let ready;
</script>

<svelte:head>
  <script
    defer
    async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCt6yuaUq3oE7w17TJ19OnV9gYBi8Ga778&libraries=places&callback=initMap"
  >
  </script>
</svelte:head>

{#if ready}
  <Navbar />
  <Main />
{:else}
  <div class="initializing">
    <Loading loading={true} />
    <Text>Loading the good stuff...</Text>
  </div>
{/if}
