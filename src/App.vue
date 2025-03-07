

<template>
  <div class="container">
    <Analytics />

  <Navbar />
  <Hero />
  <Education/>
  <Projects />
  <About />
  <Skills />
  <Contact />
  
  <Footerd />

  </div>
  
 
</template>

<script setup>
import { Analytics } from '@vercel/analytics/vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Education from './components/Education.vue';
import Footerd from './components/Footer.vue';
import Contact from './components/Contact.vue';

</script>
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

.container{
  width: 100%;
  display: block;
}
</style>
