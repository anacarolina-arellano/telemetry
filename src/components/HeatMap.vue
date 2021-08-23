<template>
  <div>
      Heatmap
    <apexchart width="500" type="heatmap" :options="options" :series="series">
    </apexchart>
  </div>
</template>
<script>
export default {
  name: "HeatMap",
  data: () => ({
    options: {
      chart: {
        id: "heat-map"
      },
      xaxis: {
        categories: ["Jun", "Jul", "Aug", "Sep"],
      },
    },
    series: [
      {
        name: "Sunday",
        data: [10, 60, 30, 62],
      },
      {
        name: "Monday",
        data: [55, 40, 90, 62],
      },
      {
        name: "Tuesday",
        data: [90, 55, 62, 10],
      },
      {
        name: "Wednesday",
        data: [30, 55, 20, 62],
      },
      {
        name: "Thursday",
        data: [55, 63, 70, 10],
      },
      {
        name: "Friday",
        data: [35, 10, 80, 20],
      },
      {
        name: "Saturday",
        data: [45, 35, 90, 71],
      },
    ],
  }),
};
</script>
