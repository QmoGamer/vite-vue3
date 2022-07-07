<template>
  Home
</template>

<script setup>
import { inject, onMounted } from 'vue';

const $http = inject('$http');

onMounted(() => {
  $http.get('v2/Air/FIDS/Flight?%24top=30&%24format=JSON').then((res) => {
    console.log(res.data);
  });
});
</script>
