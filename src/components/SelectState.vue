<template>
  <div class="w-96">
    <FmstSelect v-model="selectedState" options="options"></FmstSelect>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FmstSelect from '../components/forms/fmst-select.vue';

const options = [
  {
    label: 'Colorado',
    value: 'CO',
  },
  {
    label: 'Wyoming',
    value: 'WY',
  },
  {
    label: 'Utah',
    value: 'UT',
  },
  {
    label: 'Nevada',
    value: 'NV',
  },
];
const selectedState = ref('CO');
</script>
