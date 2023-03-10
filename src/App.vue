<script setup>
import Header from './components/header.vue';
import blackButton from './components/blackButton.vue';
import SelectState from './components/SelectState.vue';
import SelectAge from './components/SelectAge.vue';
import SelectMonth from './components/SelectMonth.vue';

let greet =
  'Let us save you the headache, we find you the most affordable lift tickets in your area!';
</script>

<template>
  <Header />
  <div class="mx-auto p-8 flex justify-center vertical align-center items-center flex-col">
    <img :src="LandingPageUrl" alt="Find Me Lift Tickets Image" />
    <h1 class="mt-12 text-2xl">
      {{ greet }}
    </h1>
  </div>
  <div class="flex">
    <div class="mx-auto flex-col justify-items-stretch">
      <SelectState />
      <SelectAge />
      <SelectMonth />
      <blackButton class="w-full mt-10">SEARCH</blackButton>
    </div>
  </div>
</template>

<script LandingPageImage>
export default {
  data() {
    return {
      LandingPageUrl: '/assets/LandingPage.png',
    };
  },
};
</script>

<style></style>
