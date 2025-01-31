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
import { ref } from "vue";
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

.menu-toggle span::before {
  top: -8px;
}

.menu-toggle span::after {
  top: 8px;
}

.menu-toggle .open {
  background: transparent;
}

.menu-toggle .open::before {
  transform: rotate(45deg);
  top: 0;
}

.menu-toggle .open::after {
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

  nav ul {
    flex-direction: column;
    padding: 1rem 0;
  }

  nav ul li {
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
.header .logo {
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header .logo .icon {
  width: 24px;
  height: 24px;
  color: white;
}

/* Navegación */
nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

nav ul li a {
  text-decoration: none;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
}

nav ul li a .icon {
  width: 20px;
  height: 20px;
}

nav ul li a:hover {
  color: #2ecc71;
}

/* Botón hamburguesa */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle .icon {
  width: 32px;
  height: 32px;
  color: white;
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

  nav ul {
    flex-direction: column;
    padding: 1rem 0;
  }

  nav ul li {
    margin: 10px 0;
  }
}
</style>
