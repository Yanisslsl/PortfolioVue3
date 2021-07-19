<template>
  <div>
    <Home/>
    <About/>
  </div>

</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Home from './views/Home.vue'
import About from './views/About.vue'
@Options({
  components : {
    Home,
    About
  }
})
export default class App extends Vue {

}
</script>

<style lang="scss">

</style>
