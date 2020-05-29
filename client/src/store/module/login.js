import Api from "../../api"
import router from "../../router"

const LOGIN_REQUEST = "LOGIN_REQUEST"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_FAIL = "LOGIN_FAIL"
const LOGGED_IN = "LOGGED_IN"
const IS_LOADING = "IS_LOADING"
const RESET_STATE = "RESET_STATE"

const getDefaultStore = () => {
  return {
    user: {
      id: "",
      token: "",
      email: "",
      name: ""
    },
    loading: false,
    loggedIn: false,
    request: {
      email: "",
      password: ""
    }
  }
}

const state = getDefaultStore()

const getters = {}

const mutations = {
  [IS_LOADING](state, isLoading) {
    state.loading = isLoading
  },
  [LOGIN_SUCCESS](state, logged) {
    state.loggedIn = logged
  },
  [LOGIN_REQUEST](state, email) {
    state.user.email = email
  },
  [LOGIN_FAIL](state, loggedIn) {
    state.loggedIn = loggedIn
  },
  [RESET_STATE](state) {
    Object.assign(state, getDefaultStore())
  },
  [LOGGED_IN](state, user) {
    state.loggedIn = true
    state.user.id = user.id
    state.user.email = user.email
    state.user.name = user.name
    state.user.token = user.token
  }
}

const actions = {
  async login({ commit, dispatch }) {
    await Api.Login.auth(state.request.email, state.request.password).then(({ data, status }) => {
      if (status === 200) {
        commit(LOGIN_SUCCESS, true)
        commit(LOGGED_IN, data)
        setTimeout(() => {
          router.push("/dashboard")
        }, 1000)
      } else {
        commit(LOGIN_FAIL, true)
        router.push("/")
      }
    })
  },
  async logout({ commit }) {
    commit(RESET_STATE, "")
    await router.push("/auth/login")
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
