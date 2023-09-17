<template>
  <div class="container mt-3">
    <AppHeader />
    <hr>
    <div class="row">
      <ServerList
        @click-server="clickServer"
      />
      <ServerDetails
        :selectedServer="selectedServer"
      />
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
  },

  data () {
    return {
      selectedServer: 0
    }
  },

  methods: {
    clickServer (serverNo) {
      if (serverNo) {
        this.selectedServer = serverNo
      }
    }
  }
}
</script>
