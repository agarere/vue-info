<template>
  <div class="col-xs-12">
    <div class="card text-bg-light mb-3">
      <div class="card-header">Component Settings</div>
      <div class="card-body">
        <h5 class="card-title">Detaylı Bilgi</h5>
        <p class="card-text">Compoennt bilgisi</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  activated () {
    console.log("Settings is activated")
  },
  deactivated () {
    console.log("Settings is deactivated")
  }
}
</script>