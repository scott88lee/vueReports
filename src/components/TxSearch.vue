<template>
  <div class="txsearch">
    <hr>
    <button v-on:click="clicker">Clicker</button>

  </div>
</template>

<script>
export default {
  name: "TxSearch",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    clicker: function() {
      this.count++;
    }
  }
};
</script>

<style scoped>
</style>
