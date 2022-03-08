<template>
  <b-card
    :title="item.header"
    header-tag="header"
    footer-tag="footer"
  >
    <template #header>
      <h6 class="mb-0 text-warning">
        {{ item.title }}
      </h6>
    </template>
    <b-card-text>{{ item.body }}</b-card-text>
    <em class="fs">
      Website:
      <a
        class="text-primary"
        :href="`https://${item.link}`"
        target="_blank"
      >
        {{ item.description }}
      </a>
    </em>
    <template #footer>
      <n-link
        class="btn btn-primary"
        :to="routeConfig"
        variant="primary"
      >
        Show =>
      </n-link>
    </template>
  </b-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    routeName: {
      type: String,
      required: true
    },
    param: {
      type: String,
      required: true
    }
  },
  computed: {
    routeConfig () {
      const params = {}
      params[this.param] = this.item.id
      return {
        name: this.routeName,
        params
      }
    }
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.log(this.item)
  }
}
</script>

<style scoped>
  .fs{
    font-size: 16px !important;
  }

</style>
