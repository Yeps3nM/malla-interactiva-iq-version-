<template>
  <div :class="{ dark: $store.state.darkMode }">
    <div
      class="flex flex-col items-center justify-center dark:bg-gray-700 dark:text-white"
    >
      <toggle
        @toggle="$store.dispatch('toggleDarkMode')"
        id="darkMode"
        active-text="🌙"
        non-active-text="☀️"
        class="ml-auto"
        :value="$store.state.darkMode"
      />
      <div class="flex my-4 text-3xl font-bold text-center">
        <p>
          Malla IQ ⚗️
        </p>
      </div>
      <div>
        <div class="flex flex-col items-center mb-4 md:flex-row">
          <div class="flex flex-row items-center mr-4">
            <div
              class="w-8 h-4 mr-1 bg-pink-500 border-2 border-black dark:bg-pink-800 dark:border-white"
            ></div>
            <span>Ramo activo</span>
          </div>
          <div class="flex flex-row items-center mr-4">
            <div
              class="w-8 h-4 mr-1 bg-violet-400 border-4 border-black border-double dark:bg-violet-800 dark:border-white"
            ></div>
            <span>Ramo requerido</span>
          </div>
          <div
            class="flex flex-row items-center mr-4"
            v-if="$store.state.mallaActiva === 'mallav3'"
          >
            <div
              class="w-8 h-4 mr-1 bg-yellow-300 border-2 border-black border-dotted dark:bg-yellow-600 dark:border-white"
            ></div>
            <span>Ramos simultáneos</span>
          </div>
          <div class="flex flex-row items-center mr-4">
            <div
              class="w-8 h-4 mr-1 bg-cyan-400 border-2 border-black border-dashed dark:bg-cyan-800 dark:border-white"
            ></div>
            <span>Ramos "or" (se necesita uno)</span>
          </div>
        </div>
      </div>
      <div class="max-w-screen-xl">
        <semester
          v-for="(semester, index) in semesters"
          :key="index"
          :subjects="semester.subjects"
          :number="semester.number"
        >
          {{ semester }}
        </semester>
      </div>
    </div>
  </div>
</template>

<script>
import mallav5 from '../public/mallav5.json';
import Semester from './components/semester';
import Toggle from './components/toggle';

export default {
  name: 'App',
  components: {
    Semester,
    Toggle,
  },
  computed: {
    semesters() {
      return mallav5.semesters;
    },
  },
};
</script>
