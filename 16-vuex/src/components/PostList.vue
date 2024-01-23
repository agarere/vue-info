<template>
  <div>
    <h1>User List</h1>
    <div
      class="info-container"
      style="width: 100%;margin-bottom: 16px"
      v-for="(user, index) in users"
      :key="index"
    >
      User: {{ user.name }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PostList',

  computed: {
    ...mapGetters({
      users: 'userList'
    })
  },

  mounted () {
    this.getUserList()
  },

  methods: {
    ...mapActions({
      getUserList: 'getAllUsers'
    })
  }
}
</script>