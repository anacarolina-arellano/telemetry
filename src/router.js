/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use( Router );

import Home from '@/routes/Home.vue'
import Admin from '@/routes/Admin.vue'


export default new Router({
    routes: [
        { path:"/",      name:"Home",  component: Home, props: { name: "Warehouse"} },
        { path:"/admin", name:"Admin", component: Admin }
    ]
});