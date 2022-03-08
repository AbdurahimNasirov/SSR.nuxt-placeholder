<template>
  <div class="card-list">
    <CardItem v-for="item in items" :key="item.id" :item="item" :route-name="routeName" :param="param" />
  </div>
</template>

<script>
import CardItem from '~/components/cards/CardItem.vue'
export default {
  components: {
    CardItem
  },
  props: {
    items: {
      type: Array,
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
