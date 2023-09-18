<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <ProductCard>
          <h1 slot="header">Telefon</h1>
          <p slot="content">IPhone 14 Pro Max</p>
        </ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/BaseCard'

export default {
  components: {
    ProductCard
  }
}
</script>

