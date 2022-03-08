export const state = () => ({
  posts: []
})

export const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  }
}

export const actions = {
  async fetchPosts ({ commit }, id) {
    const res = await this.$axios.get('/posts')
    const req = res.filter(post => post.userId === +id)
    commit('setPosts', req)
  }
}

export const getters = {
  getPosts: state => state.posts
}
