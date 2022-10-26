<script>
  import Icon from "./Icon.svelte";

  import {onDestroy, onMount} from "svelte";
  import {getLocationWeather, storedData} from "../api";
  import {MAP_AUTOCOMPLETE_OPTIONS} from "../api/utils";

  onMount(async () => {
    const input = document.getElementById("search-input");
    getLocationWeather(47.6062, -122.3321);
    console.log("Google check");
    if (window.google) {
      console.log("Google is available", window.google);
      const google = window.google;
      let autocomplete = null;

      autocomplete = new google.maps.places.Autocomplete(
        input,
        MAP_AUTOCOMPLETE_OPTIONS
      );
      console.log(autocomplete);

      const fillInAddress = async () => {
        const place = autocomplete.getPlace();
        // get cordinates
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        if (lat && lng) {
          try {
            storedData.update(() => ({
              loading: true,
              error: null,
              data: {},
            }));

            const res = await getLocationWeather(lat, lng);
            if (res) {
              storedData.update(() => ({
                loading: false,
                error: null,
                data: res,
              }));
              console.log("res", res);
            }
          } catch (error) {
            storedData.update(() => ({
              loading: false,
              error: error.message ?? "Something went wrong",
              data: {},
            }));
          }
        }
      };
      autocomplete.addListener("place_changed", fillInAddress);
    }
  });
</script>

<div class="search-address">
  <input
    id="search-input"
    class="search-input"
    placeholder="Search location..."
    type="text"
  />

  <Icon name="moon" />
</div>
