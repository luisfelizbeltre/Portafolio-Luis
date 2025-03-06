<script setup>
import { LucidePhone, LucideMail } from 'lucide-vue-next';

const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">  
    <div class="container">
      <p>&copy; {{ year }} Desarrollado con ❤️ por Luis Eduardo</p>

    </div>

    
  </footer>
</template>

<style scoped>
/* Footer solo ocupa el espacio necesario */
.footer {
  width: 100%;
  background-color:rgb(18 18 18 / 23%);
  color: #fff;
  text-align: center;
  padding:  0;
}

/* Contenedor ocupa todo el espacio dentro del footer */
.container {
  max-width: 60%;
  background-color: rgb(0, 0, 0);
  margin: 0 auto;
  padding: 1rem;
border-radius: 70px 70px 0 0;
}



/* Texto sin márgenes adicionales */
.footer p {
  margin: 0;
  font-size: 1.5rem;
}

/* Íconos */
.icon {
  width: 24px;
  height: 24px;
  color: #ffffff;
}
</style>
