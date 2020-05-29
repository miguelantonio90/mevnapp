import Vue from "vue"
import Vuex from "vuex"
import login from "./module/login"
import user from "./module/user"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login: login,
    user: user
  }
})
