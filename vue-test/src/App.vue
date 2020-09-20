<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Button
     :disabled="disabled" 
     :size="size"
     :radius="radius"
     v-on:clicked="buttonClickHandler"
    > 
      <template v-slot:button>111</template>
    </Button>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Button from "./components/Button";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Button
  },
  data() {
    return {
      disabled: false,
      size: 'bg', // 'bg' 'md' 'sm'
      radius: true  // true false
    }
  },
  methods:{
    buttonClickHandler(val) {
      alert(val)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
