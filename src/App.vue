<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <p>count: {{ count }}</p>
    <p>getCounterDaiText: {{ getCounterDaiText }}</p>
    <input v-model="suffix"/>
    <p>getCounterText: {{ getCounterText }}</p>
    <button @click="increment">Increment</button>
    <p>date: {{ viewdate }}</p>
    <button @click="getCurrentDate">View Current Date</button>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { modules, getterTypes, mutationTypes, actionTypes } from './store/const'

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  data(){
    return {
      suffix: ''
    }
  },
  computed: {
    ...mapState({
      count: state => state.counter.count,
      viewdate: state => state.dateviewer.viewdate
    }),
    ...mapGetters(modules.COUNTER, [getterTypes.COUNTER_GETCOUNTERDAITEXT]), // 引数がなく関数名も同一の場合はシンプルにマッピングができる
    getCounterText(){
      return this.$store.getters[
        modules.COUNTER + "/" + getterTypes.COUNTER_GETCOUNTERTEXT
      ](this.suffix);
    }
  },
  methods: {
    ...mapMutations(modules.COUNTER, [mutationTypes.COUNTER_INCREMENT]),
    ...mapActions(modules.DATEVIEWER, [actionTypes.DATEVIEWER_GETCURRENTDATE]
    //  {
    //  viewcurrentdate: 'getCurrentDate'
    //}
    )
  }
}
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
