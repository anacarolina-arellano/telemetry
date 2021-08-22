<template>
  <v-container>
    <v-card elevation="2">
      <v-card-title>Sales Graph</v-card-title>
      <line-chart
        :chart-data="datacollection"
        :options="chartOptions"
      ></line-chart>
    </v-card>
  </v-container>
</template>

<script>
import LineChart from "../LineCharts";

export default {
  name: "AQIChartComponent",
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: {
        labels: [
          "January",
          "February",
          "March",
          "April"
        ],
        datasets: [
          {
            data: [5, 2, 4, 3],
            label: "Product 1",
            borderColor: "#3e95cd",
            fill: false,
          },
          {
            data: [3, 3, 4, 4],
            label: "Product 2",
            borderColor: "#8e5ea2",
            fill: false,
          },
          {
            data: [0, 3, 1, 3],
            label: "Product 3",
            borderColor: "#3cba9f",
            fill: false,
          }
        ],
      },
      chartOptions: {
        responsive: true,
        legend: {
          display: true,
        },
        tooltips: {
          titleFontSize: 20,
          bodyFontSize: 25,
        },
        scales: {
          xAxes: [],
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    };
  },
};
</script>