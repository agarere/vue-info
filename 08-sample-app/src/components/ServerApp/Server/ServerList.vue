<template>
  <div class="col-xs-12 col-sm-4">
    <div class="list-group">
      <button
        class="list-group-item list-group-item-action"
        v-for="index in 5"
        :key="index"
        @click="clickServer(index)"
      >
        Sunucu #{{ index }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickServer (serverNo) {
      this.$emit('click-server', serverNo)
    }
  }
}
</script>