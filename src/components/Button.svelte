<script>
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

<button on:click={toggle} class="toggle">
  {`${nextTheme} theme`}
</button>
