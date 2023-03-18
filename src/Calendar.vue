<script>
import { GetPriceByDay } from 'api/priceByDay.js';
import SelectAge from './components/SelectAge.vue';
import SelectMonth from './components/SelectMonth.vue';
import SelectState from './components/SelectState.vue';
import header from './components/header.vue';

const pricesByDay = GetPriceByDay('March');
</script>
