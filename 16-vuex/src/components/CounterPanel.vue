<template>
  <div
    class="wrn-container"
    style="width: 100%;margin-bottom: 16px"
  >
    Counter: {{ counter }}
  </div>
</template>

<script>
export default {
  name: 'CounterPanel',

  computed: {
    counter () {
      return this.$store.getters.counter
    }
  }
}
</script>