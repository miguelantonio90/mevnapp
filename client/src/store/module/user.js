// Copyright (c) 2020.
import Api from "../../api"
import router from "../../router"

const USER_ENABLED = true
const FETCHING_USERS = "FETCHING_USERS"
const SWITCH_REGISTER_MODAL = "SWITCH_REGISTER_MODAL"
const SWITCH_USER_EDIT_MODAL = "SWITCH_USER_EDIT_MODAL"
const USER_CREATED = "USER_CREATED"
const USER_EDIT = "USER_EDIT"
const USER_UPDATED = "USER_UPDATED"
const USER_DELETED = "USER_DELETED"
const USER_TABLE_LOADING = "USER_TABLE_LOADING"
const FAILED_USER = "FAILED_USER"
const ENV_DATA_PROCESS = "ENV_DATA_PROCESS"

const getDefaultStore = () => {
  return {
    showRegister: false,
    showEditModal: false,
    newUser: {
      name: "",
      email: "",
      password: "",
      enabled: USER_ENABLED
    },
    editUser: {
      id: "",
      name: "",
      email: "",
      password: "",
      enabled: USER_ENABLED
    },
    users: []
  }
}

const state = getDefaultStore()

const getters = {}

const mutations = {
  [SWITCH_REGISTER_MODAL](state, showModal) {
    state.showRegister = showModal
  },
  [SWITCH_USER_EDIT_MODAL](state, showModal) {
    state.showEditModal = showModal
  },
  [FETCHING_USERS](state, users) {
    state.users = users
  },
  [ENV_DATA_PROCESS](state, isActionInProgress) {
    state.isActionInProgress = isActionInProgress
  },
  [USER_CREATED](state) {
    state.showRegister = false
  },
  [USER_EDIT](state, userId) {
    state.editUser = Object.assign({}, state.users.filter(node => node.node.id === userId).shift().node)
  },
  [USER_UPDATED](state) {
    state.showEditModal = false
  },
  [USER_DELETED](state) {},
  [FAILED_USER](state, error) {}
}

const actions = {
  toogleRegisterModal({ commit }, showModal) {
    commit(SWITCH_REGISTER_MODAL, showModal)
  },
  toogleEditModal({ commit }, showModal) {
    commit(SWITCH_USER_EDIT_MODAL, showModal)
  },
  async getUsers({ commit }) {
    commit(USER_TABLE_LOADING, true)
  },
  async createUser({ commit, dispatch }) {
    commit(ENV_DATA_PROCESS, true)
    commit(USER_CREATED)
    await Api.User.create(state.newUser)
      .then(() => commit(ENV_DATA_PROCESS, false))
      .then(({ data }, { status }) => {
        if (status === 200) {
          console.log(data)
        }
      })
      .catch(error => commit(FAILED_USER, error))
  },
  async updateUser({ commit, dispatch }) {
    commit(ENV_DATA_PROCESS, true)
  },
  async deleteUser({ commit, dispatch }, userId) {}
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
