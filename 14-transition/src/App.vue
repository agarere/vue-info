<template>
  <div class="mx-auto p-5 w-50 d-flex flex-column align-items-center">
    <button
      class="btn btn-primary"
      @click="show = !show"
    >
      Göster/Gizle
    </button>
    <hr>
    <transition name="fade">
      <div
        v-if="show"
        class="alert alert-success w-100"
      >
        Alert...
      </div>
    </transition>
    <hr>
    <transition name="slide">
      <div
        v-if="show"
        class="alert alert-info w-100"
      >
        Alert...
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {

}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 1;
}

.slide-enter {}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}
.slide-leave {}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
}


@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>


