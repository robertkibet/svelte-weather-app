<script lang="ts">
  import Main from "./screens/Main.svelte";
  import {getLocationWeather} from "./api";
  import Navbar from "./components/Navbar.svelte";
  const results = getLocationWeather();
</script>

<Navbar />
<Main />
