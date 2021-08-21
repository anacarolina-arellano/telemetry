/*
Implement a Bar Chart Derivitive from vue-chartjs (Chart.js for vue)

<bar-chart :chartData="someObject" :options="someOptions"></bar-chart>

@copyright (c) 2020. Scott Henshaw. All Rights Reserved.
*/
'use strict';

import Controller from '@/../lib/controller'
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

// For doc purposes, this si a Vue style component defn as a singleton object
// Below is a class defn using my Controller base class wrapper for Vue components
// in this case used to implement Vue mixins
class Chart extends Controller {

    constructor( name, subComponentList ) {
        super( name, subComponentList );
        this.extends = Bar;
        this.vm = {};
        this.props = {
            chartData: Object,
            options: Object,
        }
        this.mixins = [ reactiveProp ];
    }

    vue_mounted() {
        this.renderChart( this.chartData, this.options )
    }
}

export default new Chart('BarChart', { Bar });
