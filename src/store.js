import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
//import {firebase} from 'firebase'
import {functions} from 'firebase-functions'

const funcURL = 'https://us-centrall-warehouseapp-288c9.cloudfunctions.net/'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {
        firstAction() {

            functions.https.aggregate();
        },
        fetchData(){
            Axios.post(`${funcURL}getAggregatedData`)
            .then(data => {
                //do stuff with data
                console.log(data)
            })
        }
    },
    modules: {

    }
})