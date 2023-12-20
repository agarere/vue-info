<template>
  <div>
    <AppHeader />
    <div class="container">
      <div class="card p-4 mt-4 mx-auto" style="width: 36rem;">
        <router-view></router-view>
      </div>
    </div>
    <!-- <AppFooter /> -->
  </div>
</template>

<script>
import AppHeader from './components/shared/AppHeader'

export default {
  name: 'App',

  components: {
    AppHeader
  }
}
</script>

