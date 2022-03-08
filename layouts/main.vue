<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <n-link class="navbar-brand" to="/">
          Kino Magico
        </n-link>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <n-link to="/" class="nav-link">
              Home
            </n-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="d-flex">
      <div class="sidebar">
        <div class="p-4 text-danger">
          <h4> {{ user[0].name }}</h4>
          <p class="text-dark">
            Name: {{ user[0].name }}
          </p>
          <p class="text-dark">
            Email: {{ user[0].email }}
          </p>
          <n-link :to="`/users/${$route.params.id}/posts/`" class="d-block" active-class="text-dark">
            Posts
          </n-link>
          <n-link :to="`/users/${$route.params.id}/todos/`" class="d-block" active-class="text-dark">
            Todos
          </n-link>
          <n-link :to="`/users/${$route.params.id}/albums/`" class="d-block" active-class="text-dark">
            Albums
          </n-link>
        </div>
      </div>
      <div class="card-list-layout px-5 py-2">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MainLayout',
  computed: {
    ...mapGetters({
      getUsers: 'users/getUsers'
    }),
    user () {
      return this.getUsers.filter(user => user.id === Number(this.$route.params.id))
    }
  }
}
</script>

<style scoped>
  .sidebar{
    width: 20vw;
    border-right: 4px solid #007bff;
    position: absolute;
    top: 70px;
    height: calc(100vh - 70px);
    left: 0;
    z-index: 2;
  }
  .card-list-layout{
    max-width: calc(100vw - 304px) ;
    width: 100%;
    margin-left: auto;
  }
</style>
