<template>
  <div style="background-color: #bbaeae; width:100%; padding: 24px">
    <h3>User</h3>
    User Id: {{ userId }}
    <br>
    User Name: {{ userName }}
    <br>
    <hr>
    <button @click="buttonClicked">
      Go to Home
    </button>
  </div>
</template>

<script>
export default {
  name: 'UserComponent',

  computed: {
    userId () {
      return this.$route.params.id || '-'
    },

    userName () {
      return this.$route.query.username || ''
    }
  },

  methods: {
    buttonClicked () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>

</style>