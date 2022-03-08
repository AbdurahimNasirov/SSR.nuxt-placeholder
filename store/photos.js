export const state = () => ({
  photos: []
})

export const mutations = {
  setPhotos (state, photos) {
    state.photos = photos
  }
}

export const actions = {
  async fetchPhotos ({ commit }, id) {
    const res = await this.$axios.get('/photos')
    const req = res.filter(photo => photo.albumId === +id)
    commit('setPhotos', req)
  }
}

export const getters = {
  getPhotos: state => state.photos
}
