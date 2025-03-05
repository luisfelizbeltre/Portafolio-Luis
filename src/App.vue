<script setup>
import { Analytics } from '@vercel/analytics/vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Education from './components/Education.vue';
import Footerd from './components/Footer.vue';


</script>

<template>
  <Analytics />

  <Navbar />
  <Hero />
  <Education/>
  <Projects />
  <Skills />
  <About />

  <Footerd />
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

