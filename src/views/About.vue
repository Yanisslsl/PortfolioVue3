<template>
  <div class="about hidden" id='mainpage'>
    <div class='flex h-screen'>
      <div class='flex'>
        <div class='flex flex-col items-start'>
          <p class='white text-8xl pr-20 text-white font-black'> Yaniss Loisel </p>
      <p class='white text-3xl pr-10 antialiased text-white font-thin pl-2'> Développeur et intégrateur web</p>
        </div>
      
         <img src='character24.svg' style='width: 400px'>
      </div>
     
      
    </div>
  </div>
</template>

<script >
import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex'
import { key } from '../store/store'
export default class About extends Vue {
  store = useStore(key)
 



}
</script>
<style>

/* body {
  margin: 0px;
  padding: 0px;
} */


.hidden {
  display: none;
}
.about {
  background-color: #EA675A;
  height: 100vh;
  
  border: 12px solid white;
}

</style>
