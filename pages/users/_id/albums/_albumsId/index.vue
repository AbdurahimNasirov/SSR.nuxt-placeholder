<template>
  <div class="card-list">
    <div v-for="(photo, idx) in photos" :key="idx">
      <b-card
        :title="'Photo ' + (idx + 1)"
        :img-src="photo.imgUrl"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-img rounded="circle" width="80px" height="80px" :src="photo.thumbnailUrl" alt="Image 1" />
        <b-card-text>
          {{ photo.title }}
        </b-card-text>
        <n-link :to="`/users/${$route.params.id}/albums/`" class="btn btn-primary">
          Go Back
        </n-link>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UnknownUsers',
  layout: 'main',
  async asyncData ({ store, params }) {
    await store.dispatch('photos/fetchPhotos', params.albumsId)
  },
  computed: {
    ...mapGetters({
      getPhotos: 'photos/getPhotos'
    }),
    photos () {
      return this.getPhotos.map((photo) => {
        return {
          imgUrl: photo.url,
          thumbnailUrl: photo.thumbnailUrl,
          title: photo.title
        }
      })
    }
  }
}
</script>
<style scoped>
  .card-list{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 25px;
    grid-column-gap: 25px;
  }
</style>
