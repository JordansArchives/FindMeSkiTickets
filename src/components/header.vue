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
            <a href="#">
              <span class="sr-only">Your Company</span>
              <h1 class="uppercase text-4xl font-black">Find me lift tickets</h1>
            </a>
          </div>
          <div class="ml-10 space-x-4">
            <a href="/about" class="inline-block">
              <Button>ABOUT</Button>
            </a>
            <a href="/faq" class="inline-block">
              <Button>FAQ</Button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<!-- This is where CSS will go -->
<style></style>
