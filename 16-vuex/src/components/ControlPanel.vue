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
    <button
      style="margin-left: 8px;"
      class="btn btn-red"
      @click="reset"
    >
      Sıfırla
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ControlPanel',

  computed: {
    counter () { /** Basit kullanım yöntemi */
      return this.$store.getters.counter
    }
  },

  methods: {
    increase () {
      /** Basit kullanım yöntemi */
      this.$store.commit('setCounter', this.counter + 1)
    },

    decrease () {
      this.setCounter(this.counter - 1)
    },

    reset () {
      this.setCounterData(0)
    },

    /** Array olarak kullanımı */
    ...mapMutations([
      'setCounter'
    ]),

    /** Farklı bir fonk. ismi ile kaydetme yöntemi */
    ...mapMutations({
      setCounterData: 'setCounter'
    })
  }
}
</script>

<style>
.control-panel-container {
  display: flex;
}
</style>