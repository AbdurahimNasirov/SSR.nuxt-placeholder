<template>
  <div>
    <CardList :items="todos" route-name="users-id-todos-todoId" param="todoId" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardList from '~/components/cards/CardList.vue'
export default {
  name: 'TodosPage',
  components: {
    CardList
  },
  layout: 'main',
  async asyncData ({ store, params }) {
    await store.dispatch('todos/fetchTodos', params.id)
  },
  computed: {
    ...mapGetters({
      getTodos: 'todos/getTodos',
      getUsers: 'users/getUsers'
    }),
    user () {
      return this.getUsers.find(user => user.id === +this.$route.params.id)
    },
    todos () {
      return this.getTodos.map((todo) => {
        return {
          title: this.user.name,
          header: todo.title,
          id: todo.id,
          description: this.user.company.name,
          link: this.user.website,
          body: todo.completed ? 'completed' : 'not completed'
        }
      })
    }
  }
}
</script>

<style>

</style>
