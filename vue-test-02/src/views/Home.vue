<template>
  <div class="home">
    <input type="text" name="" id="" v-model="inputValue">
    <p v-show="!formatShow" class="noformat">{{inputValue}}</p>
    <p v-show="formatShow" class="format">{{inputValue | formatterText}}</p>
    <button @click="formatShow = !formatShow">switch</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return {
      inputValue: '',
      formatShow: true
    }
  }, 
  filters:{
    formatterText(val) {
      if (!val) return ''
      if(val.length > 7) {
        let frontVal = val.slice(0,2)
        let endVal = val.slice(val.length - 2, val.length)
        return frontVal + '...' + endVal
      } else {
        return val
      }
    }
  },
  watch: {
    formatShow(newVal, oldVal){
      console.log(newVal)
    }
  },
  components: {
    HelloWorld
  }
}
</script>
