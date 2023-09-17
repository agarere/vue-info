<template>
  <div class="col-xs-12 col-sm-4">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="index in 5"
        :key="index"
      >
        Sunucu #{{ index }}
      </li>
    </ul>
  </div>
</template>