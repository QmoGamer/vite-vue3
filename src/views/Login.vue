<template>
  <div class="container">
    <h1 class="text-white text-center ls-1 mt-0 mb-10">MY LOGO</h1>
    <div class="login-card">
      <h2 class="text-center text-white ls-1 mt-0">LOGIN</h2>
      <p class="text-center text-white ls-0.5 mb-10">Please enter your account and password .</p>
      <div class="input-group mb-5">
        <span class="material-icons d-flex input-group-text">
          person
        </span>
        <input type="text" class="form-control" placeholder="Account">
      </div>
      <div class="input-group mb-6">
        <span class="material-icons d-flex input-group-text">
          lock
        </span>
        <input type="text" class="form-control" placeholder="Password">
      </div>
        <button type="button" class="btn btn-primary w-100 mb-4">Login</button>
        <button type="button" class="btn text-white w-100">Forgot Password ?</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

onMounted(() => document.querySelector('body').setAttribute('style', 'background: linear-gradient(to right, #005aa7, #fffde4)'));

onBeforeUnmount(() => document.querySelector('body').setAttribute('style', ''));
</script>

<style lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}
.login-card {
  width: 500px;
  margin:  0 auto;
  border-radius: 10px;
  backdrop-filter: brightness(80%);
  padding: 36px;
}
</style>