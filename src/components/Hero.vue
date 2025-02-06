<template>
  <section id="hero" class="hero">
    <div class="container">
      <div class="hero-content">
        <!-- Imagen de perfil -->
        <div class="img-container">
          <nuxt-img src="/image.png" format="webp" />

          <img src="/luisfoto.webp" alt="Foto de [luis]" class="hero-img" loading="lazy" />
        </div>

        <!-- Texto animado -->
        <h2 class="fade-in">Hola, soy <span>[Luis Eduardo]</span></h2>
        <p class="slide-up">Desarrollador Web | Apasionado por la tecnología</p>

        <!-- Redes sociales -->
        <div class="social-links">
          <a href="https://github.com/luisfelizbeltre" target="_blank" class="social-btn">
            <LucideGithub class="icon" />
          </a>
          <a href="https://linkedin.com/in/luis-eduardo-feliz-beltre" target="_blank" class="social-btn">
            <LucideLinkedin class="icon" />
          </a>
          <a href="mailto:dev@luiseduardodev.com" class="social-btn">
            <LucideMail class="icon" />
          </a>
        </div>

        <!-- Botón de descarga -->
        <a href="/luis CV 2025.pdf"  download class="btn">Descargar CV</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { LucideGithub, LucideLinkedin, LucideMail } from "lucide-vue-next"; // Importando iconos

onMounted(() => {
  document.querySelector(".hero-content").classList.add("visible");
});
</script>

<style scoped>
/* ===== Hero Section ===== */
.hero {
  background: linear-gradient(135deg, #3498db, #1abc9c);
  color: #fff;
  padding: 5rem 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  max-height: 50vh;
}

/* ===== Contenedor Hero ===== */
.hero-content {
  max-width: 600px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== Imagen de perfil ===== */
.img-container {
  width: 160px;
  height: 160px;
  margin: 0 auto 1rem;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.img-container:hover {
  transform: scale(1.05);
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* ===== Texto Hero ===== */
h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

h2 span {
  color: #f1c40f;
}

p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

/* ===== Botón de Descarga CV ===== */
.btn {
  display: inline-block;
  background: #f1c40f;
  color: #000;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  transition: background 0.3s ease, transform 0.2s ease;
  text-decoration: none;
}

.btn:hover {
  background: #d4ac0d;
  transform: scale(1.1);
}

/* ===== Redes Sociales ===== */
.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.social-btn {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.7rem;
  border-radius: 50%;
  transition: transform 0.3s ease, background 0.3s ease;
}

.social-btn:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: scale(1.2);
}

.icon {
  width: 24px;
  height: 24px;
  color: #33322b;
}

/* ===== Animaciones ===== */
.fade-in {
  opacity: 0;
  animation: fadeIn 1.5s forwards;
}

.slide-up {
  opacity: 0;
  animation: slideUp 1.5s forwards;
}

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
