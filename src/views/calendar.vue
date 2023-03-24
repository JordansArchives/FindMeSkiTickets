<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { GetPriceByDay } from '../api/priceByDay.js';
import Button from '../components/button.vue';
import validStates from '../api/validStates';

const route = useRoute();
console.log(
  'query',
  route.query,
  'month',
  route.query.month,
  'age',
  route.query.age,
  'state',
  route.query.state
);
const month = route.query.month;
const state = route.query.state;
const age = route.query.age;

const hasValidParams = ref(false);
const isLoading = ref(false);
const data = reactive([]);

const hasData = computed(() => {
  return data.value && data.value.length;
});

const paramsAreValid = () => {
  // Check to make sure we have a valid state
  // .some() individually checks each object to see if there's one with the value matching our query param
  const hasValidState = validStates.some((state) => state.value === state);

  return hasValidState;
};

if (paramsAreValid()) {
  hasValidParams.value = true;
  // Load the data for the month, age, and loction selected, and then render the page

  data.value = GetPriceByDay(route.query.month);
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

  <div v-if="!hasValidParams" class="p-4 flex flex-row gap-4">
    Uh oh! Your paramters are not valid. Please go back and try again. { Button to back page }
  </div>
  <div v-else-if="isLoading">Show a nice loading animation here!</div>
  <div v-else-if="!(isLoading || hasData)">
    This is an error state. We should have loaded data here... what happened????
  </div>
  <div v-else>
    We're not loading, and we have data. Show our calendar here! If we don't have data or we're not
    loading, something is wrong with our logic...
  </div>
</template>
