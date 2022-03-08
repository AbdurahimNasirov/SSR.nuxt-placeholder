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
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style>
</style>
