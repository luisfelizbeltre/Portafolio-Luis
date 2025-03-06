<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="fade-in">Sobre mí</h2>
      <div class="about-card slide-up">
        <hr>
        <div class="about-content">
          <div data-aos="zoom-in-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
          class="about-image">
            <img src="/imagenprueba.jpg" alt="Sobre mi imagen">
          </div>
          <div data-aos="zoom-in-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
             class="about-text">
            <p>
              Desarrollador web con formación en SMR y DAW, y experiencia en
              desarrollo Full Stack e implementación de soluciones tecnológicas. Destaco
              por mis habilidades en resolución de problemas, organización y trabajo en
              equipo, adquiridas en proyectos de software y el sector logístico.
              Apasionado por la tecnología, busco seguir creciendo en el sector IT.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.querySelector(".about-card").classList.add("visible");
});
</script>

<style scoped>
/* ===== Sección Sobre Mí ===== */
.about-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.about-text {
  flex: 1;
  min-width: 300px;
  text-align: left;
  font-size: 1.2rem;
  align-self: flex-start;
}

.about-image img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
}

hr {
  width: 96%;
  height: 3px;
  background-color: #38db34;
  border: none;
  margin: 20px auto;
}

/* ===== Contenedor ===== */
.container {
  max-width: 1000%;
  margin: 0 auto;
  padding: 20px;
  background-color: #171816;
  border-radius: 50px;

}

/* ===== Título con animación ===== */
h2 {
  font-size: 2rem;
  color: #3498db;
  text-align: center;
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
  margin: 0 auto;
  text-align: left;
  color: white;
  max-width: 100%;
}

/* Aparece con animación */
.about-card.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== Media Queries ===== */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    text-align: center;
  }

  .about-text {
    text-align: center;
  }
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
</style>