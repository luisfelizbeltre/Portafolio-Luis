<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ year }} [Luis Eduardo]. Todos los derechos reservados.</p>
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
</style>
