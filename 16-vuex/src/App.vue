<template>
  <div id="app">
    <CounterPanel />
    <ControlPanel />
  </div>
</template>

<script>
import ControlPanel from './components/ControlPanel'
import CounterPanel from './components/CounterPanel'

export default {
  name: 'App',

  components: {
    ControlPanel,
    CounterPanel
  }
}
</script>
