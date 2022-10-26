<script>
  import Text from "../components/Text.svelte";
  import Icon from "../components/Icon.svelte";
  import Loading from "../components/Loading.svelte";

  const datas = [1, 2, 3, 4];
  import {storedData} from "../api";
  import {onDestroy} from "svelte";
  let newData = {};
  const unsubscribe = storedData.subscribe((value) => {
    newData = value;
  });
  onDestroy(unsubscribe);
</script>

<Loading loading={newData.loading} />
<div class="weather-summary-header">
  <div class="weather-summary-header wrapper">
    <div class="weather-info">
      <Icon name="wind-02" size="5rem" />
      <Text size="80px" weight="700">
        <span slot="number">12</span>
        <span slot="unit">&#176;</span>
      </Text>
      <Text>Eldoret, KEN</Text>
    </div>
    <div class="weather-info day-info">
      <Text weight="700">10:30am</Text>
      <Text>Sunset, Wednesday</Text>
    </div>
  </div>
</div>
<div class="weather-full-information">
  <div class="weather-description-wrapper">
    <div class="weather-description-container">
      {#each datas as weather}
        <div class="weather-description-box">
          <Icon size="50px" name="sun-setting-01" />
          <div class="description">
            <Text size="14px" weight="400">Humidity</Text>
            <Text>41%</Text>
          </div>
        </div>
      {/each}
    </div>
    <div class="monthly-highlights">
      <div>
        <Text size="14px" weight="700">Monthly Rainfall</Text>
        <Text>47mm</Text>
      </div>
      <div class="end">
        <Text size="14px" weight="700">This Year</Text>
        <Text>+41%</Text>
      </div>
    </div>
  </div>
  <div class="weather-description-wrapper info">
    <Text>More info</Text>
  </div>
</div>
