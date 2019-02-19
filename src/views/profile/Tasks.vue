<template>
  <upme-page class="page-activity">
    <h1 slot="header">
      {{ title }}
    </h1>
    <ul class="tasks">
      <task
        v-for="task in tasks"
        :task="task"
        :key="task.id"/>
    </ul>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
import Task from '@/components/tasks/Task.vue'
import { mapState } from 'vuex'

export default {
  components: {
    UpmePage,
    Task
  },
  data () {
    return {
      title: 'Задания'
    }
  },
  computed: {
    ...mapState('tasks', {
      tasks: 'list'
    })
  },
  mounted () {
    this.$store.dispatch('tasks/init')
  }
}
</script>

<style lang="scss" scoped>
.tasks {
  @include respond-to(small) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
}
/deep/ .task {
  @include respond-to(small) {
    width: 48%;
    width: calc(50% - 1em);
    &:nth-last-child(2) {
      margin-bottom: 0;
    }
  }
}
</style>
