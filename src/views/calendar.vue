<script setup>
import { GetPriceByDay } from 'api/priceByDay.js';

const pricesByDay = GetPriceByDay('March');
</script>

<template>This is where calendar should go.</template>
