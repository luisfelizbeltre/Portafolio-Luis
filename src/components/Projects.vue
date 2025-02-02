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

.project-card:hover {
  transform: translateY(-5px);


}

.project-card {
  transition: transform 0.3s ease;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);


}

.projects {
  padding: 2rem 0;
  text-align: center;
  background: linear-gradient(135deg, #ecf0f1, #dfe6e9);
}

h2 {
  margin-bottom: 1rem;
  color: #3498db;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 20px;

}

h3 {
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
}

.btn {
  background-color: #3498db;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.btn:hover {
  background-color: rgb(33.1380753138, 125.1882845188, 186.8619246862);
}
</style>