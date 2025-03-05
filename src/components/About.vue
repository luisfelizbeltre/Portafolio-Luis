<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="fade-in">Sobre mí</h2>
      <div class="about-card slide-up">
        <p>
          Desarrollador web con formación en SMR y DAW, y experiencia en
 desarrollo Full Stack e implementación de soluciones tecnológicas. Destaco
 por mis habilidades en resolución de problemas, organización y trabajo en
 equipo, adquiridas en proyectos de software y el sector logístico.
 Apasionado por la tecnología, busco seguir creciendo en el sector IT.
        </p>

       
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { LucidePhone, LucideMail } from "lucide-vue-next"; // Importando iconos

const tecnologias = "HTML, CSS, JavaScript, Vue.js";

onMounted(() => {
  document.querySelector(".about-card").classList.add("visible");
});
</script>

<style scoped>
/* ===== Sección Sobre Mí ===== */
.about {
  text-align: center;
}

/* ===== Contenedor ===== */
.container {
  margin: 0 auto;
  padding: 20px;
}

/* ===== Título con animación ===== */
h2 {
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeIn 1.5s forwards;
}

/* ===== Tarjeta de información ===== */
.about-card {
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, opacity 0.5s ease;
  opacity: 0;
  transform: translateY(20px);
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
  color: white;

  
}

/* Aparece con animación */
.about-card.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== Contacto ===== */
.contact-info {
  margin-top: 1rem;
}

.contact-info p {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: #2c3e50;
}

.contact-info a {
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
}

.contact-info a:hover {
  text-decoration: underline;
}

/* ===== Íconos ===== */
.icon {
  width: 24px;
  height: 24px;
  color: #3498db;
}

/* ===== Animaciones ===== */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
