<script setup>
import Header from './components/header.vue';
</script>

<template>
  <Header />
  <div class="mx-auto p-8 flex justify-center">
    <img :src="LandingPageUrl" alt="Find Me Lift Tickets Image" />
  </div>
</template>

<script LandingPageImage>
export default {
  data() {
    return {
      LandingPageUrl: '/public/LandingPage.png',
    };
  },
};
</script>

<style></style>
