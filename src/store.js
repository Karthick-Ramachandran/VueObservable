import Vue from "vue";

export const number = Vue.observable({
  count: 1
});

// Global store like behaviour
// Vue.prototype.$store = number

// this is Reactive
export const mutations = {
  increment() {
    number.count += 1;
  },
  decrement() {
    number.count -= 1;
  }
};
