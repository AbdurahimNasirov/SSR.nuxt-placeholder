<template>
  <CardList :items="albums" route-name="users-id-albums-albumsId" param="albumsId" />
</template>

<script>
import { mapGetters } from 'vuex'
import CardList from '~/components/cards/CardList.vue'
export default {
  name: 'AlbumsPage',
  components: {
    CardList
  },
  layout: 'main',
  async asyncData ({ store, params }) {
    await store.dispatch('albums/fetchAlbums', params.id)
  },
  computed: {
    ...mapGetters({
      getAlbums: 'albums/getAlbums',
      getUsers: 'users/getUsers'
    }),
    user () {
      return this.getUsers.find(user => user.id === +this.$route.params.id)
    },
    albums () {
      return this.getAlbums.map((album) => {
        return {
          title: this.user.name,
          header: album.title,
          id: album.id,
          description: this.user.company.name,
          link: this.user.website,
          body: 'Album'
        }
      })
    }
  }
}
</script>

<style>

</style>
