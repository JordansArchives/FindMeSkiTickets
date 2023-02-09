<script setup>
// This is where any needed functionality will go
// this component has none currently

</script>

<!-- This is where the form (html) of the component will go -->
<template>
  <div class="wrapper">
    <button class="brutal-btn">
      <slot></slot>
    </button>
  </div>
</template>

<!-- This is where CSS will go -->
<style>
.brutal-btn {
  background-color: white;
  border: 4px solid black;
  border-radius: 4px;
  padding: 10px 25px;
  font-weight: bold;
  font-size: 20px;
  position: relative;
  color: black;
}

.brutal-btn:after {
  content: '';
  position: absolute;
  background: black;
  top: 8px;
  left: 8px;
  right: -8px;
  bottom: -8px;
  z-index: -1;
}

.brutal-btn:hover,
brutalist-btn:active {
  color: white;
  background-color: black;
  transition: all 0.3s ease;
}

.brutal-btn:hover:after,
brutalist-btn:hover:active {
  background-color: white;
  border: 2px solid black;
  transition: all 0.3s ease;
}

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>