import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
//registering(globally) our router to our root #app
import store from '@/store'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  components: { App },
  render: h => h(App)
}).$mount('#app')
