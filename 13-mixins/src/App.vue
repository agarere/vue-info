<template>
  <div>
    <p>myData: {{ myData }}</p>
    <p>sum: {{ sum (2, 2) }}</p>
  </div>
</template>

<script>
import myMixin from './myMixin';

export default {
  name: 'App',

  mixins: [
    myMixin
  ]
}
</script>
