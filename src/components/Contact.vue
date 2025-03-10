<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">Contacto</h2>

      <div class="contact-box">
        <h3 class="contact-subtitle">¡Hablemos!</h3>

        <!-- Información de contacto -->
        <div class="contact-items">
          <!-- Email -->
          <div class="contact-item">
            <i class="devicon-google-plain"></i>
            <p>dev@luiseduardodev.com</p>
          </div>

          <!-- Teléfono -->
          <div class="contact-item">
            <i class="fa-solid fa-phone"></i>
            <p>+34 643 718 864</p>
          </div>

          <!-- Ubicación -->
          <div class="contact-item">
            <i class="devicon-linux-plain"></i>
            <p>Madrid, España</p>
          </div>
        </div>

        <hr class="divider" />

        <!-- Redes Sociales -->
        <div class="social-links">
          <a href="www.linkedin.com/in/luiseduardofb" target="_blank" class="social-icon" aria-label="Visit my linkedim">
            <i class=" social-icon devicon-linkedin-plain"></i>
          </a>
          <a href="https://github.com/luisfelizbeltre" target="_blank" class="social-icon" aria-label="Visit my github">
            <i class="social-icon devicon-github-original"></i>
          </a>
          <a href="https://twitter.com" target="_blank" class="social-icon" aria-label="Visit my twitter">
            <i class="social-icon devicon-twitter-original"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Importa Devicon si no está en tu proyecto */

.contact-section {
  padding: 3rem 0;
  background-color: #00000067;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;


}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  color: #1479d8;
  margin-bottom: 2rem;
}

.contact-box {
  background-color: #000000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  border: solid 1px rgba(255, 255, 255, 0.74);
  user-select: all;

}

.contact-subtitle {
  font-size: 1.25rem;
  color: #2cb132;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  user-select: text;

}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;
}

.contact-item:hover {
  background-color: #f3f4f6;
}

.contact-item i {
  font-size: 2rem;
}

.contact-item .devicon-google-plain {
  color: #ef4444;
}

.contact-item .devicon-phonegap-plain {
  color: #3b82f6;
}

.contact-item .devicon-linux-plain {
  color: #22c55e;
}

.contact-item p {
  font-size: 1.14rem;
  color: #6b8070;
}

.divider {
  border: 0;
  height: 1px;
  background-color: #67d82f;
  margin: 1.7em 0;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-icon {
  font-size: 2.5rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.25);
}

.social-icon.devicon-linkedin-plain {
  color: #1750b9;
}

.social-icon.devicon-linkedin-plain:hover {
  color: #8c91a1;
}

.social-icon.devicon-github-original {
  color: #f7faff;
}

.social-icon.devicon-github-original:hover {
  color: #111827;
}

.social-icon.devicon-twitter-original {
  color: #60a5fa;
}

.social-icon.devicon-twitter-original:hover {
  color: #3b82f6;
}

/* Responsive */
@media (max-width: 640px) {
  .contact-box {
    max-width: 90%;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .contact-subtitle {
    font-size: 1.125rem;
  }

  .contact-item i {
    font-size: 1.75rem;
  }

  .contact-item p {
    font-size: 1rem;
  }

  .social-icon {
    font-size: 2rem;
  }
}
</style>