<script>
import 'v-calendar/dist/style.css';
import { Calendar, DatePicker } from 'v-calendar';

export default {
  components: {
    Calendar,
    DatePicker,
  },
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<template>
  <DatePicker v-model="date" class="calendarStyle" color="teal" />
</template>

<style scoped>
calendarStyle {
  background-color: white;
  border: 4px solid black;
  border-radius: 4px;
  /* padding: 10px 25px; */
  font-weight: bold;
  font-size: 20px;
  position: relative;
  color: black;
}
</style>
