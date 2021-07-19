<template>
  <div class="flex" id="main">
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex'
import { key } from '../store/store'
// @ is an alias to /src


export default class Home extends Vue {

 
     store = useStore(key)

    // typed as number
 


  mounted (){
    console.log(this.store.state.isLandingPageCleared)

   
 
    const loadingAnimationTime = 2000
    console.log(loadingAnimationTime)

const showMainAnimation = (parent) => {
  const boxContainer = document.createElement("div");
  boxContainer.style.overflow = "hidden";
  const box = document.createElement("div");
  box.classList.add("box", "flex");
  parent.appendChild(boxContainer);
  boxContainer.appendChild(box);
  const quote = ["Des", "solutions", "pour", "tous", "vos", "projets"];
  let delay = 0;
  // Add all the words
  for (let word in quote){
    let text = document.createElement("span");
    text.textContent = quote[word];
    text.classList.add("animate-slideup");
    delay = delay + 22;
    text.style.animationDelay = delay + "ms";
    box.appendChild(text);
  }
  const lastAnimationTime = 1000 + delay; // in ms
  // Add full stop
  let text = document.createElement("div");
  text.classList.add("fs", "flex");
  text.style.animationDelay = lastAnimationTime - 100 + "ms";
  box.appendChild(text);
};

const revealCurtain = (parent) => {
  const curtain = document.createElement("div");
  curtain.classList.add("flex", "curtain");
  parent.appendChild(curtain);
  const progressBar = document.createElement("div");
  progressBar.classList.add("progressBar");
  curtain.appendChild(progressBar);
  progressBar.classList.add("progressGrow-animation");  
  return curtain;
};

const init = () => {
  console.log('called')
  const container = document.getElementById("main");
  const curtain = revealCurtain(container);
  setTimeout(() => {
    container.removeChild(curtain);
    showMainAnimation(container);
    setTimeout(() => {
      
      // this.$router.push({path: 'about'})
      container.style.display = 'none'
      const page1 = document.getElementById('mainpage');
      const page2 = document.getElementById('secondpage')
      page1.classList.remove('hidden')
      page2.classList.remove('hidden')
       
    },4000)
    console.log(this.$router)
  }, loadingAnimationTime + 100)
};

init();


  }
 
  
}


</script>

<style>

body {
  margin: 0px;
  padding: 0px;
}

:root {
  --contrast: white;
  --bgColor: #212E53;
  --fontColor: white;
}

#main {
  min-height: 100vh;
  background-color: var(--bgColor);
  border: 12px solid var(--contrast);
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  padding: 0px 10px;
  font-size: 60px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: var(--fontColor);
}

.animate-slideup {
  margin-right: 16px;
  transform: translateY(200px) rotate(15deg);
  animation: slideup 1000ms cubic-bezier(0.65, 0, 0.35, 1) 1 forwards;
  transform-origin: top center;
}

@keyframes slideup {
  0% {
    transform: translateY(200px) rotate(20deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

.fs {
  height: 12px;
  width: 12px;
  background-color: #f95959;
  margin-left: -6px;
  margin-top: 28px;
  opacity: 0;
  animation: rotate-fs 1800ms cubic-bezier(0.5, 1, 0.89, 1) forwards;
  transform-origin: center;
}

@keyframes rotate-fs {
  0% {
    transform: rotate(0deg) scale(0);
    opacity: 0;
  }
  30% {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(720deg);
    opacity: 1;
  }
}

.curtain {
  position: fixed;
  background-color: var(--contrast);
  width: 100vw;
  min-height: 100vh;
  top: 0px;
  left: 0px;
}

.progressBar {
  height: 2px;
  width: 2px;
  background-color: var(--bgColor);
}

.progressGrow-animation {
  animation: grow 2000ms cubic-bezier(0.65, 0, 0.35, 1) 1 forwards;
}

@keyframes grow {
  0% {
    width: 0px;
  }
  50% {
    width: calc(100vw - 24px);
    height: 2px;
  }
  100% {
    width: calc(100vw - 24px);
    height: calc(100vh - 24px);
  }
}

@media (max-width: 800px) {
  .flex {
    flex-wrap: wrap;
  }
  .animate {
    margin-right: 4px;
  }
  .fs {
    height: 12px;
    width: 12px;
    margin-top: 30px;
  }
}

@media (max-width: 520px) {
  .box {
    font-size: 40px;
  }
  .main {
    border: 5px solid #fc3c3c;
  }
  .animate-slideup {
    margin-right: 6px;
  }
  .fs {
    height: 10px;
    width: 10px;
    margin-left: -4px;
    margin-top: 13px;
  }
}


</style>
