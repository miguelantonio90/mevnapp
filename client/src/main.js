import Vue from "vue"
import "./plugins/vuetify"
import App from "./App.vue"
import router from "./router/"
import store from "./store"
import "./registerServiceWorker"
import "roboto-fontface/css/roboto/roboto-fontface.css"
import "font-awesome/css/font-awesome.css"
import i18n from "./lang/lang"
import Axios from "axios"

Vue.config.productionTip = false

Axios.defaults.baseURL = "http://localhost:9000/api"

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app")
