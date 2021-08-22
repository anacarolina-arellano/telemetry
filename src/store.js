//Copyright (c) 2021. Ana Carolina Arellano Alvarez
require('firebase/firestore')
var cors = require('cors')
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
//import {firebase} from 'firebase'
//import { functions } from 'firebase-functions'
import Firebase from 'firebase'
import VueFire from 'vuefire'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAHAij4Xf0nEQoGYWd-aYNMNA3lCtEpX20',
authDomain: 'warehouseapp-288c9.firebaseapp.com',
  projectId: 'warehouseapp-288c9',
  storageBucket: 'warehouseapp-288c9.appspot.com',
  messagingSenderId: '1026739158294',
  appId: '1:1026739158294:web:9164498e70ec7240cf2437'
}

const funcURL = 'http://localhost:5001/warehouseapp-288c9/us-central1'
// Initialize Firebase
Firebase.initializeApp(firebaseConfig)
const db = Firebase.firestore()
Vue.use(Vuex, VueFire, Firebase, cors)

export default new Vuex.Store({
  state: {},
  mutations: {
    //add new sale to the sales collection in firebase
    addNewSale (state, newSale) {
       db.collection('sales')
        .doc(newSale.newFormID)
        .set(newSale)
        .then(() => {
          alert('The sale was successfully added')
        })
    },
    //get the data from an existing form
    getForm (state, formID) {
      console.log(formID)
      Axios.get(`${funcURL}/getForm?id=${formID}`).then(result => {
        alert(JSON.stringify(result.data))
      })
    }
  },
  actions: {

    //call muttaion of new sale
    submitSalesForm ({ commit }, newSale) {
      commit('addNewSale', newSale)
    },

    //search for an specific form  (will be implemented for A4)
    searchForm ({ commit }, formID) {
      
      commit('getForm', formID)
    }
  },
  modules: {}
})
