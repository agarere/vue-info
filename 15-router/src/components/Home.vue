<template>
  <div style="background-color: #7ebc84; width:100%; padding: 24px">
    <h3>Home</h3>
    <input type="text" v-model="userName">
    <button @click="buttonClicked">
      Go to User
    </button>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',

  data () {
    return {
      userName: ''
    }
  },

  methods: {
    buttonClicked () {
      this.$router.push(`/user?username=${this.userName}`)
    }
  }
}
</script>

<style>

</style>