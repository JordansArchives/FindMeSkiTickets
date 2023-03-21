<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { GetPriceByDay } from '../api/priceByDay.js';
import Button from '../components/button.vue';

const route = useRoute();
console.log('query', route.query);
const month = route.query.month;

const hasValidParams = ref(false);
const paramsAreValid = () => {
  // Validate your params here

  return true;
};

if (paramsAreValid()) {
  hasValidParams.value = true;
  // Load the data for the month, age, and loction selected, and then render the page

  const pricesByDay = GetPriceByDay(route.query.month);
} else {
  // handle the error gracefully and show an error state
}
</script>

<template>
  This is where calendar should go. Here's a couple helpful resources. Your URLs on this page should
  end up looking something like<br />
  <code>`/calendar?state=CO&month=March&Age=Adult`</code>
  <div class="flex flex-row gap-4">
    <a
      href="https://www.programmingbasic.com/set-url-query-params-in-vue-using-vue-router#set-query-params-in-router-link"
      target="_blank"
    >
      <Button>Set query params in router-link</Button>
    </a>

    <a href="https://router.vuejs.org/api/interfaces/RouteLocation.html" target="_blank">
      <Button>Get the query params inside the calendar page</Button>
    </a>

    <a href="https://router.vuejs.org/guide/essentials/navigation.html" target="_blank">
      <Button>If the filters are changed, update the query params</Button>
    </a>
  </div>

  <div v-if="hasValidParams" class="p-4 flex flex-row gap-4">
    Our params are valid! Let's build the calendar here.
  </div>
</template>
