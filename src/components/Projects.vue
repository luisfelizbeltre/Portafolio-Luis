<template>
    <section id="projects" class="projects">
      <div class="container">
        <h2>Proyectos</h2>
        <div class="project-grid">
          <div v-for="(proyecto, index) in proyectos" :key="index" class="project-card">
            <h3>{{ proyecto.nombre }}</h3>
            <p>{{ proyecto.descripcion }}</p>
            <a :href="proyecto.link" class="btn" target="_blank">Ver Proyecto</a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const proyectos = [
    { nombre: "Proyecto 1", descripcion: "Descripción del proyecto 1.", link: "#" },
    { nombre: "Proyecto 2", descripcion: "Descripción del proyecto 2.", link: "#" }
  ];
  </script>
  
  <style scoped>
  /* Estilos de la sección */
  .projects{
    background: linear-gradient(135deg, #ecf0f1, #dfe6e9);

  }
  </style>
  