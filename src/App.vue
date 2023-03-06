<script setup>
import Header from './components/header.vue';
import SelectState from './components/SelectStateLB.vue';
import SelectAge from './components/SelectAge.vue';
import DatePicker from './components/DatePicker.vue';
</script>

<template>
  <Header />
  <div class="mx-auto p-8 flex justify-center vertical align-center items-center flex-col">
    <img :src="LandingPageUrl" alt="Find Me Lift Tickets Image" />
    <p class="font-sans mt-12 text-xl">
      Let us save you the headache, we find you the most affordable lift tickets in your area!
    </p>
  </div>
  <div class="flex">
    <div class="mx-auto flex-col justify-items-stretch">
      <SelectState />
      <SelectAge />
      <DatePicker />
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
