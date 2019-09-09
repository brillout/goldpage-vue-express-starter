<template>
  <div>
    <p>
    Hello {{isReversed?nameReversed:name}}, welcome to <code>Goldpage</code>.
    </p>
    <p>
      <button v-on:click="toggleReverse">Reverse name</button>
    </p>
    <p>
      This page is rendered to HTML as well as to the DOM.
    </p>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  props: ['name', 'nameReversed'],
  data() {
    return {
      isReversed: false,
      bundler: "Parcel"
    };
  },
  methods: {
    toggleReverse: function() {
      this.isReversed = !this.isReversed;
    },
  },
};
</script>

<style scoped>
code {
  color: gold;
}
</style>
