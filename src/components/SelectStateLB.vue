<script setup>
import { ref } from 'vue';
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import dropIcon from '/assets/dropIcon.png';

const people = [{ name: 'COLORADO' }, { name: 'WYOMING' }, { name: 'UTAH' }, { name: 'MONTANA' }];
const selectedPerson = ref(people[0]);
</script>

<template>
  <div class="w-96">
    <Listbox v-model="selectedPerson">
      <div class="relative mt-1">
        <ListboxButton class="listboxbuttonStyle items-left mt-1 max-h-60 w-full overflow-auto">
          <span class="block truncate text-left pl-2">{{ selectedPerson.name }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-left pr-2">
            <drop class="h-5 w-5 text-gray-900" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions class="listboxbuttonStyle absolute mt-1 max-h-60 w-full overflow-auto">
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
                  'relative cursor-default select-none py-2 pr-4 pl-2',
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
  /* padding: 10px 25px; */
  font-weight: bold;
  font-size: 20px;
  position: relative;
  color: black;
}

.listboxbuttonStyle:after {
  background-color: white;
  border: 4px solid black;
  border-radius: 4px;
  /* padding: 10px 25px; */
  font-weight: bold;
  font-size: 20px;
  position: relative;
  color: black;
}

.listboxbuttonStyle:hover,
brutalist-btn:active {
  color: black;
  border-radius: 4px;
  background-color: #9fbaff;
  transition: all 0.3s ease;
}

.listboxbuttonStyle:hover:after,
brutalist-btn:hover:active {
  border-radius: 4px;
  background-color: white;
  border: 2px solid black;
  transition: all 0.3s ease;
}
</style>
