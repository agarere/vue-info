/* eslint-disable */
const state = {
  userList: []
}

const getters = {
  userList: state => state.userList
}

const mutations = {
  setUserList: (state, value) => {
    state.userList = [...value]
  }
}

const actions = {
  getAllUsers: ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          commit('setUserList', json)
          console.log(json)
          resolve(json)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}