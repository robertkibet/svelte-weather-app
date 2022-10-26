<script>
  import Icon from "./Icon.svelte";
  const storedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
  }

  let currentTheme =
    document.documentElement.getAttribute("data-theme") ?? "dark";
  let nextTheme = currentTheme === "dark" ? "light" : "dark";
  const toggle = () => {
    currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";

    if (currentTheme === "light") {
      targetTheme = "dark";
    }

    document.documentElement.setAttribute("data-theme", targetTheme);
    nextTheme = targetTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", targetTheme);
  };
</script>

<button on:click={toggle} class="toggler">
  {#if nextTheme === "light"}
    <Icon name="sun" size="25px" />
  {:else}
    <Icon name="moon-01" size="25px" />
  {/if}
</button>
