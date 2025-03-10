<template>
  <header class="header">
    <div class="container">
      <!-- Logo con icono -->
      <h1 class="logo">
        <LucideUser class="icon" /> Luis
      </h1>
      <nav :class="{ open: menuOpen }">
        <ul>
          <li>
            <a href="#hero" @click="closeMenu" :class="{ active: activeSection === 'hero' } "> 
              <LucideHome class="icon" /> Inicio
            </a>
          </li>
          <li>
            <a href="#education" @click="closeMenu" :class="{ active: activeSection === 'education' }">
              <i class="fa-solid fa-building-columns"></i> Educación
            </a>
          </li>       
          <li>
            <a href="#projects" @click="closeMenu" :class="{ active: activeSection === 'projects' }">
              <LucideCode class="icon" /> Proyectos
            </a>
          </li>
          <li>
            <a href="#about" @click="closeMenu"  :class="{ active: activeSection === 'about' }">
              <LucideUser class="icon" /> Sobre mí
            </a>
          </li>
          <li>
            <a href="#skills" @click="closeMenu" :class="{ active: activeSection === 'skills' }">
              <LucideCpu class="icon" /> Habilidades
            </a>
          </li>
          <li>
            <a href="#contact" @click="closeMenu" :class="{ active: activeSection === 'contact' }">
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
import { ref,onMounted, onUnmounted } from "vue";
import { LucideHome,LucideUser,LucideCode,LucideCpu,LucideMail, LucideMenu, LucideX, ZoomOut,} from "lucide-vue-next"; 

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};

const activeSection =ref("");

const updateActiveSection = () => {
  const sections = document.querySelectorAll("section");

  const scrollPosition = window.scrollY+100;

  sections.forEach((section) =>{
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight){
      activeSection.value = section.id;
    }
  })
}
onMounted(() => {
  window.addEventListener("scroll", updateActiveSection);
  updateActiveSection();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveSection);
});
</script>

<style scoped>
/* Header */
.header {
  backdrop-filter: blur(10px);
  color: #fff;
  padding: 0.5rem ;
  position: fixed;
  top: 0;
  width: 100%; 
  z-index: 1000;
  transition: background 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.active{
  color: #ff3333;
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


nav ul li a.active {
  color: #33ff57; /* Verde cuando está activo */
  font-weight: bold;
  transform: scale(1.4);
  transition: transform 0.3s ease;
}

.zoom-out{
  transform: scale(1.2);
  transition: transform 0.3s ease;
}



/* Estilos generales */
.container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
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
