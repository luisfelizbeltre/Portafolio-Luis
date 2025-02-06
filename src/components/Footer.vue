<script setup>
import { LucidePhone, LucideMail } from 'lucide-vue-next';

const year = new Date().getFullYear();
const phoneNumber = "+34 634 718 864";  // Número de teléfono
const email = "dev@luiseduardodev.com";  
</script>

<template>
  <footer class="footer">
    <div class="container">
      <!-- Texto de copyright con el año actual -->
      <p>&copy; {{ year }} Desarrollado con ❤️ por Luis Eduardo</p>
      
      <div class="contact-info">
        <!-- Información de contacto con iconos -->
        <p>
          <LucidePhone class="icon" /> <strong>Teléfono:</strong> {{ phoneNumber }}
        </p>
        <p>
          <LucideMail class="icon" /> <strong>Correo:</strong>
          <a :href="'mailto:' + email">{{ email }}</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #222;
  color: #fff;
  text-align: center;
  padding: 15px 0;
  font-size: 14px;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.footer {
  background-color: #3498db;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
}

.footer p {
  margin: 0;
}

/* ===== Contacto ===== */
.contact-info {
  margin-top: 1rem;
  display: inline;
}

.contact-info p {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: #000000;
}

.contact-info a {
  color: #000000;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

/* ===== Íconos ===== */
.icon {
  width: 24px;
  height: 24px;
  color: #ffffff;
}
</style>
