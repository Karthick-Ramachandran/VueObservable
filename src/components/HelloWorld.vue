<template>
  <div>
    <Count />
    <button @click="increment">Increment</button> &nbsp;
    <button @click="decrement">Decrement</button>
  </div>
</template>
<script>
import Count from "./Count";
import { mutations } from "../store";

export default {
  components: {
    Count
  },
  computed: {
    increment() {
      return mutations.increment;
    },
    decrement() {
      return mutations.decrement;
    }
  }
};
</script>
