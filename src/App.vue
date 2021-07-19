<template>
  <div class='AllPage'>
    <Home/>
    <About/>
    <SecondPage />
  </div>

</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Home from './views/Home.vue'
import About from './views/About.vue'
import SecondPage from './views/SecondPage.vue'
@Options({
  components : {
    About,
    Home,
    SecondPage
  }
})
export default class App extends Vue {

}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
.AllPage {
  font-family: 'Quicksand', sans-serif;
}
</style>
