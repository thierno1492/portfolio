import Vue from 'vue'
import App from './App.vue'
import router from './router'




import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import Swimlane from 'vue-swimlane'




// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Swimlane)




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
