<template>
  <div>
    <div class="mx-auto p-8 flex justify-center vertical align-center items-center flex-col">
      <img :src="LandingPageUrl" alt="Find Me Lift Tickets Image" />
      <h1 class="mt-12 text-2xl">
        {{ greet }}
      </h1>
    </div>

    <div class="flex pb-16">
      <div class="mx-auto flex-col justify-items-stretch">
        <div class="w-96">
          <FmstSelect v-model="selectedState" :options="stateOptions" />
          <FmstSelect v-model="selectedMonth" :options="monthOptions" />
          <FmstSelect v-model="selectedAge" :options="ageOptions" />
        </div>
        <router-link
          :to="{
            path: '/calendar',
            query: {
              state: selectedState.value,
              age: selectedAge.value,
              month: selectedMonth.value,
            },
          }"
        >
          <blackButton class="w-full mt-10">SEARCH</blackButton>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import blackButton from '../components/blackButton.vue';
import FmstSelect from '../components/forms/fmst-select.vue';
import validStates from '../api/validStates';

const greet =
  'Let us save you the headache, we find you the most affordable lift tickets in your area!';

const LandingPageUrl = '/assets/LandingPage.png';

const stateOptions = validStates;
const selectedState = ref(stateOptions[0]);

const ageOptions = [
  { label: 'ADULT (13+)', value: 'AD' },
  { label: 'CHILD (5-12)', value: 'CH' },
  { label: '4 AND UNDER', value: 'UN' },
];
const selectedAge = ref(ageOptions[0]);

const monthOptions = [
  { label: 'JANUARY', value: 'JA' },
  { label: 'FEBUARY', value: 'FE' },
  { label: 'MARCH', value: 'MAR' },
  { label: 'APRIL', value: 'AP' },
  { label: 'MAY', value: 'MAY' },
  { label: 'JUNE', value: 'JN' },
  { label: 'JULY', value: 'JL' },
  { label: 'AUGUST', value: 'AG' },
  { label: 'SEPTEMBER', value: 'SP' },
  { label: 'OCTOBER', value: 'OT' },
  { label: 'NOVEMBER', value: 'NV' },
  { label: 'DECEMBER', value: 'DM' },
];
const selectedMonth = ref(monthOptions[0]);
</script>
<style></style>
