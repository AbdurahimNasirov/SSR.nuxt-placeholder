<template>
  <div>
    <b-card-group deck>
      <b-card :title="todo.title" header-tag="header" footer-tag="footer">
        <b-card-text>{{ todo.completed ? 'completed': 'not completed' }}</b-card-text>
        <n-link class="btn btn-primary" :to="`/users/${$route.params.id}/todos`">
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
  name: 'TodoItem',
  layout: 'main',
  computed: {
    ...mapGetters({
      getTodos: 'todos/getTodos'
    }),
    todo () {
      return this.getTodos.find(todo => todo.id === this.$route.params.todoId)
    }
  }
}
</script>

<style>

</style>
