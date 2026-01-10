import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import './css/application.css';

// 1. Install Vuex plugin
Vue.use(Vuex);

// 2. Create Store (Vuex 3 Syntax)
const store = new Vuex.Store({
  state: {
    activeSubject: null,
    simultaneousSubjects: [],
    orSubjects: [],
    requiredSubjects: [],
    darkMode: false,
    mallaActiva: 'mallav5' // Keeping this for safety based on your previous file
  },
  mutations: {
    setActiveSubject: (state, payload) => {
      state.activeSubject = payload;
    },
    setSimultaneousSubjects: (state, payload) => {
      state.simultaneousSubjects = payload;
    },
    setOrSubjects: (state, payload) => {
      state.orSubjects = payload;
    },
    setRequiredSubjects: (state, payload) => {
      state.requiredSubjects = payload;
    },
    setDarkMode: (state, payload) => {
      state.darkMode = payload;
    },
    // Keep this mutation even if unused, to prevent errors if legacy components call it
    setMallaActiva: (state, payload) => {
      state.mallaActiva = payload;
    } 
  },
  actions: {
    clearActiveSubject: context => {
      context.commit('setActiveSubject', '');
      context.commit('setSimultaneousSubjects', []);
      context.commit('setOrSubjects', []);
    },
    toggleDarkMode: context => {
      context.commit('setDarkMode', !context.state.darkMode);
    },
    // Legacy action stub to prevent crash
    toggleMalla: () => {
      console.log("Malla toggle is disabled"); 
    }
  }
});

// 3. Mount App (Vue 2 Syntax)
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');