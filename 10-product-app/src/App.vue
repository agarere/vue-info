<template>
  <div>
    <AppHeader />
    <div class="container">
      <div class="card p-4 mt-4 mx-auto" style="width: 36rem;">
        <!-- <ProductPurchase /> -->
        <ProductList />
      </div>
    </div>
    <!-- <AppFooter /> -->
  </div>
</template>

<script>
import AppHeader from './components/shared/AppHeader'
// import AppFooter from './components/shared/AppFooter'
// import ProductPurchase from './components/products/ProductPurchase'
import ProductList from './components/products/ProductList'

export default {
  name: 'App',

  components: {
    AppHeader,
    // AppFooter,
    // ProductPurchase,
    ProductList
  }
}
</script>

