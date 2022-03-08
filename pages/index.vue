<template>
  <div class="container-fluid py-4 pl-5 d-flex justify-content-center">
    <CardList :items="users" route-name="users-id" param="id" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardList from '~/components/cards/CardList.vue'
export default {
  name: 'IndexPage',
  components: {
    CardList
  },
  layout: 'default',
  async asyncData ({ store }) {
    await store.dispatch('users/fetchUsers')
  },
  computed: {
    ...mapGetters({
      getUsers: 'users/getUsers'
    }),
    users () {
      // const users = []
      return this.getUsers.map((user) => {
        return {
          title: user.username,
          header: user.name,
          body: user.email,
          description: user.company.name,
          id: user.id,
          link: user.website
        }
      })
      // return users
    }
  }
}
</script>

<style scoped>
</style>
