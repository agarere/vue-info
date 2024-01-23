<template>
  <div class="control-panel-container">
    <button
      class="btn btn-green"
      @click="increase"
    >
      Arttır
    </button>
    <button
      style="margin-left: 8px;"
      class="btn btn-red"
      @click="decrease"
    >
      Azalt
    </button>
  </div>
</template>

<script>
export default {
  name: 'ControlPanel',

  computed: {
    counter () {
      return this.$store.getters.counter
    }
  },

  methods: {
    increase () {
      this.$store.commit('setCounter', this.counter + 1)
    },
    decrease () {
      this.$store.commit('setCounter', this.counter - 1)
    }
  }
}
</script>

<style>
.control-panel-container {
  display: flex;
}
</style>