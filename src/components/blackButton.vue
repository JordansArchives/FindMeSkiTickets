<script setup>
// This is where any needed functionality will go
// this component has none currently
</script>

<!-- This is where the form (html) of the component will go -->
<template>
  <button class="black-btn">
    <slot></slot>
  </button>
</template>

<!-- This is where CSS will go -->
<style>
.black-btn {
  background-color: black;
  border: 4px solid black;
  border-radius: 4px;
  padding: 10px 25px;
  font-weight: bold;
  font-size: 20px;
  position: relative;
  color: white;
}

.black-btn:hover {
  color: black;
  border-radius: 4px;
  background-color: #9fbaff;
  transition: all 0.3s ease;
}

.black-btn:hover:after {
  border-radius: 4px;
  background-color: white;
  border: 2px solid black;
  transition: all 0.3s ease;
}
</style>
