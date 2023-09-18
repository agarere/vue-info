<template>
  <div class="col-xs-12 col-sm-8">
    <div
      class="card text-bg-light mb-3"
    >
      <div class="card-header">Sunucu #{{selectedServer}}</div>
      <div class="card-body">
        <h5 class="card-title">Detaylı Bilgi</h5>
        <p class="card-text">Sunucu bilgisi güncel değil !</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedServer: {
      type: Number,
      default: null
    }
  }
}
</script>