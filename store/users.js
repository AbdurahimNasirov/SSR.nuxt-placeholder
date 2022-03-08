export const state = () => ({
  users: []
})

export const mutations = {
  setUsers (state, users) {
    state.users = users
  }
}

export const actions = {
  async fetchUsers ({ commit }) {
    const res = await this.$axios.get('/users')
    commit('setUsers', res)
  }
}

export const getters = {
  getUsers: state => state.users
}
