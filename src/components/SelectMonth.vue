<!-- @PAUL Keeping this file to debug scrolling bars under buttons, not sure why thats there -->

<script setup>
import { ref } from 'vue';
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import dropIcon from './dropDown.vue';

const people = [
  { name: 'JANUARY' },
  { name: 'FEBUARY' },
  { name: 'MARCH' },
  { name: 'APRIL' },
  { name: 'MAY' },
  { name: 'JUNE' },
  { name: 'JULY' },
  { name: 'AUGUST' },
  { name: 'SEPTEMBER' },
  { name: 'OCTOBER' },
  { name: 'NOVEMBER' },
  { name: 'DECEMBER' },
];
const selectedMonth = ref(people[0]);
</script>

<template>
  <div class="w-96">
    <Listbox v-model="selectedMonth">
      <div class="relative mt-1">
        <ListboxButton class="listboxbuttonStyle absolute mt-1 max-h-60 w-full overflow-auto">
          <span class="flex justify-between truncate text-left pl-2">
            <span>{{ selectedMonth.name }}</span>
            <dropIcon class="h-6 w-6" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions class="listboxbuttonStyle absolute mt-1 w-full overflow-auto">
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="person in people"
              :key="person.name"
              :value="person"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-gray-900 text-white' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-2 pr-4',
                ]"
              >
                <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{
                  person.name
                }}</span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-black"
                >
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<style>
.listboxbuttonStyle {
  background-color: white;
  border: 4px solid black;
  border-radius: 4px;
  padding: 10px 25px;
  font-weight: bold;
  font-size: 20px;
  position: relative;
  color: black;
  overflow: visible;
}

.listboxbuttonStyle:after {
  content: '';
  border-radius: 4px;
  position: absolute;
  background: black;
  border: 2px solid black;
  top: 8px;
  left: 8px;
  right: -8px;
  bottom: -8px;
  z-index: -1;
}

.listboxbuttonStyle:hover {
  color: black;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.listboxbuttonStyle:hover:after {
  border-radius: 4px;
  background-color: white;
  border: 2px solid black;
  transition: all 0.3s ease;
}
</style>
