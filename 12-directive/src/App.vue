<template>
  <div class="container d-flex flex-column align-items-center w-100">
    <div class="row w-100">
      <div class="col-md-6 col-md-offset-3">
        <h3>VueJS'de tanımlı directive tanımları</h3>
        <p v-text="'Lorem ipsum dolor sit amet.'"></p>
        <p v-html="'<strong>v-html test</strong>'"></p>
      </div>
    </div>
    <div class="row w-100">
      <div class="col-md-6 col-md-offset-3">
        <h3>Custom global directive tanımları</h3>
        <p v-globalColor="'green'">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    <div class="row w-100">
      <div class="col-md-6 col-md-offset-3">
        <h3>Custom global directive tanımları</h3>
        <p v-globalColor:background.delay="'green'">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    <div class="row w-100">
      <div class="col-md-6 col-md-offset-3">
        <h3>Custom global directive tanımları</h3>
        <p v-border>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',

  directives: {
    "border": {
      bind (el) {
        el.style.border = "1px solid red"
      }
    }
  }

}
</script>
