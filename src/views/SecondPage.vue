<template>
  <div class='bg-yellow h-screen hidden' id='secondpage'>
    <h1>This is an about page</h1>
  </div>
</template>

<script >
import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex'
import { key } from '../store/store'
export default class SecondPage extends Vue {
  store = useStore(key)
 



}
</script>
<style>

#secondpage {
  
  padding: 12px;
}




</style>
