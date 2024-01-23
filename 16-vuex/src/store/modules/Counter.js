/* eslint-disable */
const state = {
  counter: 0
}

const getters = {
  counter: state => state.counter,
  stringCounter: (state) => {
    return state.counter + ' kez tıklandı'
  }
}

const mutations = {
  setCounter: (state, value) => {
    state.counter = value
  }
}

export default {
  state,
  getters,
  mutations
}