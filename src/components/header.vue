<script setup>
import Button from './button.vue';

// This is where any needed functionality will go
// this component has none currently
</script>

<!-- This is where the form (html) of the component will go -->
<template>
  <header>
    <div class="bg-gray-300 sticky border-gray-900 border-b-4">
      <nav class="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div
          class="flex w-full items-center justify-between border-b border-gray-500 py-6 lg:border-none"
        >
          <div class="flex items-center">
            <router-link :to="{ name: 'Home' }">
              <span class="sr-only">Find Me Ski Tickets</span>
              <h1 class="uppercase text-4xl font-black">Find me lift tickets</h1>
            </router-link>
          </div>
          <div class="ml-10 space-x-4">
            <router-link :to="{ name: 'About' }" class="inline-block">
              <Button>ABOUT</Button>
            </router-link>
            <router-link :to="{ name: 'FAQ' }">
              <Button>FAQ</Button>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<!-- This is where CSS will go -->
<style></style>
