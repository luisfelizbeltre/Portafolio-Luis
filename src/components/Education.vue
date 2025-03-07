

<template>
  <section id="education" class="education">
    <div class="container">
      <h2>Educación</h2>
      <hr>
      <div class="education-grid">
        <div data-aos="zoom-in-up" data-aos-duration="1000" v-for="(edu, index) in educationData" :key="index" class="education-item">
          <i :class="edu.icon"></i>
          <h3>{{ edu.title }}</h3>
         
          <p>{{ edu.institution }}</p>
          <p>{{ edu.description }}</p>
          <p>{{ edu.additionalInfo }}</p>
          <div>
            <p class="date">{{ edu.date }}</p>

          </div>
       
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const educationData = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'Grado Superior en Desarrollo de Aplicaciones Web',
    institution: 'IES Francisco de Goya',
    date: '2022 - 2024',
    description: "Especialización en frontend y backend.",
    additionalInfo: "Proyecto final sobre e-commerce con Vue y Node.js."
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Grado Medio Sistema Microinformatico y Redes',
    institution: 'IES Francisco de Goya',
    date: '2020 - 2022',
    description: "Enfoque en mantenimiento de sistemas.",
    additionalInfo: "Prácticas en empresa de soporte IT."
  },
  {
  icon: 'fas fa-certificate',
  title: 'Certificación en JavaScript',
  institution: 'Plataforma de aprendizaje en línea',
  date: '2022',
  description: "Curso intensivo de JavaScript moderno, incluyendo ES6+, asincronía y manipulación del DOM.",
  additionalInfo: "Proyectos prácticos desarrollados: calculadora, lista de tareas y aplicación de notas."
}

];
</script>

<style scoped>
hr {
  width: 96%;
  height: 3px;
  background-color: rgb(28, 231, 28); /* Verde unificado */
  border: none;
  margin: 20px auto;
}
.container{
  


}
.education {
  padding: 40px 0;
  text-align: center;
  background-color: #161615; /* Sin cambios */
  border-radius: 50px;

}

.education-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;  overflow: visible; /* Asegura que los elementos sean visibles */

  
}

.education-item {
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: left;
  background-color: #0f100f; /* Fondo más consistente */
  width: 55%;
  border: solid 0.1px rgba(255, 255, 255, 0.267); /* Sin cambios */
}

.education-item:nth-child(even) {
  align-self: flex-end;
}

i {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #3498db; /* Azul unificado */
}

.date {
  font-size: 0.9rem;
  color: #2ecc71; /* Verde unificado, sin transparencia */
  font-weight: bold;
}



.education-item:hover {
  transform: translateY(-5px);
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2ecc71; /* Verde unificado */
}

.education-item > p {
  font-size: 1.3rem;
  color: #e0e0e0; /* Blanco suavizado */
  margin-bottom: 0.5rem;
  padding-left: 10px;
}
/* ===== Media Queries ===== */
@media (max-width: 768px) {
  .education-item {

  width: 100%;
  }
}

</style>
