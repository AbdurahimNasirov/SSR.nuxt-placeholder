<template>
  <CardList :items="posts" route-name="users-id-posts-postId" param="postId" />
</template>

<script>
import { mapGetters } from 'vuex'
import CardList from '~/components/cards/CardList.vue'

export default {
  name: 'PostsPage',
  components: {
    CardList
  },
  layout: 'main',
  async asyncData ({ store, params }) {
    await store.dispatch('posts/fetchPosts', params.id)
  },
  computed: {
    ...mapGetters({
      getPosts: 'posts/getPosts',
      getUsers: 'users/getUsers'
    }),
    posts () {
      return this.getPosts.map((post) => {
        return {
          header: post.title,
          title: this.user.username,
          body: post.body,
          description: this.user.company.name,
          id: post.id,
          link: this.user.website
        }
      })
    },
    user () {
      return this.getUsers.find(user => user.id === +this.$route.params.id)
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
  .fs{
    font-size: 16px !important;
  }
</style>
