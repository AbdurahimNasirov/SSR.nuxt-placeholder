<template>
  <div>
    <b-card-group deck>
      <b-card :title="post.title" header-tag="header" footer-tag="footer">
        <b-card-text>{{ post.body }}</b-card-text>
        <n-link class="btn btn-primary" :to="`/users/${$route.params.id}/`">
          Go Back
        </n-link>
        <template #footer>
          <n-link to="/">
            <em>Home</em>
          </n-link>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PostItem',
  layout: 'main',
  computed: {
    ...mapGetters({
      getPosts: 'posts/getPosts'
    }),
    post () {
      return this.getPosts.find(post => post.id === this.$route.params.postId)
    }
  }
}
</script>

<style>

</style>
