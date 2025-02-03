<template>
  <header class="header">
    <div class="container">
      <!-- Logo con icono -->
      <h1 class="logo">
        <LucideUser class="icon" /> [Luis Eduardo]
      </h1>

      <!-- Menú de navegación -->
      <nav :class="{ open: menuOpen }">
        <ul>
          <li>
            <a href="#hero" @click="closeMenu">
              <LucideHome class="icon" /> Inicio
            </a>
          </li>
          <li>
            <a href="#about" @click="closeMenu">
              <LucideUser class="icon" /> Sobre mí
            </a>
          </li>
          <li>
            <a href="#projects" @click="closeMenu">
              <LucideCode class="icon" /> Proyectos
            </a>
          </li>
          <li>
            <a href="#skills" @click="closeMenu">
              <LucideCpu class="icon" /> Habilidades
            </a>
          </li>
          <li>
            <a href="#contact" @click="closeMenu">
              <LucideMail class="icon" /> Contacto
            </a>
          </li>
        </ul>
      </nav>

      <!-- Botón menú hamburguesa -->
      <button class="menu-toggle" @click="toggleMenu">
        <LucideMenu v-if="!menuOpen" class="icon" />
        <LucideX v-else class="icon" />
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref,onMounted } from "vue";
import {
  LucideHome,
  LucideUser,
  LucideCode,
  LucideCpu,
  LucideMail,
  LucideMenu,
  LucideX,
} from "lucide-vue-next"; // Importando iconos

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
const visits=ref(0)
onMounted(async () => {
  try {
    const response = await fetch('/api/visits'); // Llamada a la API
    const data = await response.json();
    console.log('Respuesta de la API:', data); // Verificación en la consola
    visits.value = data.visits; // Actualizar el contador
  } catch (error) {
    console.error('Error al obtener las visitas:', error);
  }
});

</script>

<style scoped>
/* Estilos generales */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* Botón menú hamburguesa */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 25px;
  position: relative;
}

.menu-toggle span,
.menu-toggle span::before,
.menu-toggle span::after {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background: white;
  position: absolute;
  transition: 0.3s ease;
}

span::before {
  top: -8px;
}

span::after {
  top: 8px;
}

.open {
  background: transparent;
}

.open::before {
  transform: rotate(45deg);
  top: 0;
}

.open::after {
  transform: rotate(-45deg);
  top: 0;
}

/* Menú responsivo */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  nav {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: rgba(52, 152, 219, 0.9);
    backdrop-filter: blur(10px);
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    text-align: center;
  }

  nav.open {
    transform: translateY(0);
  }

  ul {
    flex-direction: column;
    padding: 1rem 0;
  }

  li {
    margin: 10px 0;
  }
}
/* Header */
.header {
  background: rgba(52, 152, 219, 0.9);
  backdrop-filter: blur(10px);
  color: #fff;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Logo */
.logo {
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  width: 24px;
  height: 24px;
  color: white;
}

/* Navegación */
 ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
  
}


a:hover {
  color: #2ecc71;
  transform: scale(1.2);
  transition: transform 0.3s ease;

}

/* Botón hamburguesa */




/* Menú responsivo */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  nav {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: rgba(52, 152, 219, 0.9);
    backdrop-filter: blur(10px);
    transform: translateY(-130%);
    transition: transform 0.3s ease;
    text-align: center;

  }

  nav.open {
    transform: translateY(0);
    background-color: #1b1b1b9a;
  }

  nav ul {
    flex-direction: column;
    padding: 1rem 0;
  }

  nav ul li {
    margin: 10px 0;
  }
}
</style>
