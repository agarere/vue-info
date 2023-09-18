<template>
  <div class="card-wrapper">
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot name="producer">
        <!-- here is default shown -->
        <i>Üretici bilgisi belli değil !</i>
      </slot>
    </div>
  </div>
</template>

<style scoped>
div.card-wrapper {
  border: 1 solid #cccccc;
  background: #e0e0e0;
  border-radius: 16px;
  padding: 20px 20px;
  margin-top: 20px;
}
</style>