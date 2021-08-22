/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use( Router );

import Home from '@/routes/Home.vue'
import Charts from '@/routes/Charts.vue'


export default new Router({
    routes: [
        { path:"/",      name:"Admin",  component: Home, props: { name: "Warehouse"} },
        { path:"/charts", name:"Charts", component: Charts }
    ]
});