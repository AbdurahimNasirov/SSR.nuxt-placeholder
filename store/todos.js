export const state = () => ({
  todos: []
})

export const mutations = {
  setTodos (state, todos) {
    state.todos = todos
  }
}

export const actions = {
  async fetchTodos ({ commit }, id) {
    const res = await this.$axios.get('/todos')
    const req = res.filter(todo => todo.userId === +id)
    commit('setTodos', req)
  }
}

export const getters = {
  getTodos: state => state.todos
}
