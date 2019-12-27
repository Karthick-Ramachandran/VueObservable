<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
import { number } from "../store";
export default {
  computed: {
    count() {
      return number.count;
    }
  }
};
</script>
