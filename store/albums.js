export const state = () => ({
  albums: []
})

export const mutations = {
  setAlbums (state, albums) {
    state.albums = albums
  }
}

export const actions = {
  async fetchAlbums ({ commit }, id) {
    const res = await this.$axios.get('/albums')
    const req = res.filter(album => album.userId === +id)
    commit('setAlbums', req)
  }
}

export const getters = {
  getAlbums: state => state.albums
}
