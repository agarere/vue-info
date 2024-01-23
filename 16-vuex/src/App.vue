<template>
  <div id="app">
    <h1>Counter</h1>
    <CounterPanel />
    <CounterLog />
    <ControlPanel />
    <br>
    <hr>
    <PostList />
  </div>
</template>

<script>
import ControlPanel from './components/ControlPanel'
import CounterPanel from './components/CounterPanel'
import CounterLog from './components/CounterLog'
import PostList from './components/PostList'

export default {
  name: 'App',

  components: {
    ControlPanel,
    CounterPanel,
    CounterLog,
    PostList
  }
}
</script>
