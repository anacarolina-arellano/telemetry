//Copyright (c) 2021. Ana Carolina Arellano Alvarez
<template>
  <header class="my-header">
    <div class="logo" @click="goHome(event)">
      <h1>Warehouse admin app</h1>
    </div>
    <div clas="routes">
      <routes name="Admin" class="roles"> </routes>
      <routes name="Charts" class="roles"> </routes>
    </div>
  </header>
</template>
<script>
import Controller from "@/mixins/controller";
import routes from "./ChooseRoute.vue";
class HeaderController extends Controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {};
    this.components = {
      //include component
      routes,
    };
  }

  goHome() {
    // do some router magic here to actualy change the URL
    location.href = "./index.html";
  }
}

export default new HeaderController("myHeader");
</script>

<style>
.title h1,
.title h3 {
  float: right;
  margin-right: 2vw;
  text-align: right;
  width: 100%;
}

.my-header {
  background-color: darksalmon;
  align-items: center;
  background-size: 100% 100%;
  display: flex;
  height: 130px;
  flex-direction: row;
  cursor: pointer;
  justify-content: space-between;
}
.routes {
  justify-content: right;
  flex-direction: row;
  padding-right: 55px;
}
</style>
