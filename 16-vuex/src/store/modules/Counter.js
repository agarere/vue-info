const state = {
  counter: 0
}

const getters = {
  counter: state => state.counter
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