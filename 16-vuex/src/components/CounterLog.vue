<template>
  <div
    class="wrn-container"
    style="width: 100%;margin-bottom: 16px"
  >
    Counter: {{ counterLog }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CounterPanel',

  computed: {
    /** 1.kullanım şekli */
    // ...mapGetters([
    //   'stringCounter',
    // ])

    /** 2.kullanım şekli */
    ...mapGetters({
      counterLog: 'stringCounter'
    })
  }
}
</script>