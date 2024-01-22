<template>
  <div style="background-color: #bbaeae; width:100%; padding: 24px">
    <h3>Product</h3>
    <hr>
    <button @click="buttonClicked">
      Go to Home
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProductComponent',

  beforeRouteEnter (to, from, next) {
    // Burası component daha oluşturulmadan buraya girmiş oluyor.
    // Buradayken henüz create() çağırlmamış oluyor. !!!
    // this diyerek buradaki datalara ulaşamazsın !!!
    console.log("in component enter, to:", to)
    // next(false) // yaparak sayfanın açılmasını engelleyebilirsin
    next()
  },

  beforeRouteLeave (to, from, next) {
    // Buradayken componentin içine erişebilirsin.
    // Çünkü component destroy olmadan hemen önce buraya uğrayacaktır.
    console.log("in component leave, to:", to)
    next()
  },

  methods: {
    buttonClicked () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>

</style>