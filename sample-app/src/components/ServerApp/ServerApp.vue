<template>
  <div class="container mt-3">
    <AppHeader />
    <hr>
    <div class="row">
      <ServerList />
      <ServerDetails />
    </div>
    <hr>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './Common/AppHeader'
import AppFooter from './Common/AppFooter'
import ServerList from './Server/ServerList'
import ServerDetails from './Server/ServerDetails'

export default {
  components: {
    AppHeader,
    AppFooter,
    ServerList,
    ServerDetails
  }
}
</script>
