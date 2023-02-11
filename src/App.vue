<script setup>
import Header from './components/header.vue';
</script>

<template>
  <Header />
  <div class="LandingPageImg">
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

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.LandingPageImg {
  margin-top: 100pt;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
