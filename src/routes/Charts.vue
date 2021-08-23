<template>
  <section class="charts">
    <div class="line-chart">
      <myLineChart></myLineChart>
    </div>
    <div class="heatmap">
      <myHeatMap></myHeatMap>
    </div>
  </section>
</template>

<script>
import Controller from "@/mixins/controller";
import myLineChart from "../components/SalesChart.vue";
import myHeatMap from "../components/HeatMap.vue";

class Charts extends Controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {};
    this.components = {
      //include component
      myLineChart,
      myHeatMap
    };
  }
}
export default new Charts("Charts");
</script>

<style scoped>
.line-chart {
  max-height: 45%;
  max-width: 45%;
}
.heatmap{
  max-height: 45%;
  max-width: 45%;
   display: flex;
  justify-content: center;
  align-items: center;
}
.charts{
  flex-direction: row;
  display: flex;
  justify-content: space-around;
}
</style>
