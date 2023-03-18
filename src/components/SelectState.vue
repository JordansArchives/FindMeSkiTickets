<template>
  <div class="w-96">
    <FmstSelect v-model="selectedState" :options="options" />
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

// Set our initially selected state to Colorado B) aaa yea
const selectedState = ref(options[0]);
</script>
