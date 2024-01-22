<template>
  <div style="display:flex;flex-direction:column;width:100%">
    <HeaderComponent/>
    <hr>
    <div class="container">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'

export default {
  name: 'App',

  components: {
    HeaderComponent
  }
}
</script>

<style>
.container {
  display: flex;
  /* width: 100%; */
  padding: 0 24px;
}

.container-y {
  display: flex;
  /* width: 100%; */
  padding: 24px;
  flex-direction: column;
}
</style>

