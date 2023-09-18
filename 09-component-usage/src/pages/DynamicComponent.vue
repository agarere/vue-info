<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="d-flex justify-content-start d-grid gap-3 mt-3">
        <button
          @click="selectedComponent = 'ProductApp'"
          class="btn-sm btn btn-primary"
        >Products</button>
        <button
          @click="selectedComponent = 'CartApp'"
          class="btn-sm btn btn-primary"
        >Cart</button>
        <button
          @click="selectedComponent = 'SettingsApp'"
          class="btn-sm btn btn-primary"
        >Settings</button>
      </div>
    </div>
    <hr>
    <keep-alive>
      <component :is="selectedComponent">
      </component>
    </keep-alive>
  </div>
</template>

<script>
import ProductApp from '../components/ProductApp'
import CartApp from '../components/CartApp'
import SettingsApp from '../components/SettingsApp'

export default {
  components: {
    ProductApp,
    CartApp,
    SettingsApp
  },

  data () {
    return {
      selectedComponent: 'ProductApp'
    }
  }
}
</script>

