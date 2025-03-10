<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2>Proyectos</h2>
      <div class="project-grid">
        <div v-for="(proyecto, index) in proyectos" :key="index" class="project-card">
        
           <img :src="proyecto.image" :alt="proyecto.nombre" class="project-image" srcset="">
          <h3>{{ proyecto.nombre }}</h3>
          <p>{{ proyecto.descripcion }}</p>
          
            <div class="skill-list">
            <div v-for="(skill, sIndex) in proyecto.skills" :key="sIndex" class="skill">
              <i v-if="skill.icon.includes('devicon')" :class="skill.icon"></i>
              <img v-else :src="skill.icon" :alt="skill.name" class="custom-icon" >
              
            </div>
          

            <a :href="proyecto.link" class="btn" target="_blank">Ver Proyecto</a>
          </div>
         
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const proyectos = [
{
    nombre: "ProjectSync",
    descripcion: "ProjectSync es una aplicación web para la gestión de tareas, desarrollada con Spring Boot, JWT y Vue.js, con soporte multi-tenant y actualizaciones en tiempo real. 🚀",
    link: "https://github.com/luisfelizbeltre/GestionTareaVue",
    image:"/projectsync.png",
    skills: [
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored"},
      { name: "Vue.js", icon: "devicon-vuejs-plain colored"},
      { name: "Spring Framework", icon: "devicon-spring-plain colored"},
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored"},
      { name: "JavaScript", icon: "/jwt.png" }
    ]
    
  },{
  nombre: "Tienda de Reparaciones",
  descripcion: "Aplicación web para la gestión de una tienda de reparaciones de dispositivos electrónicos, desarrollada con React",

  link: "https://doctorvoltio.com/",
  image: "/doctorvoltio.png",
  skills: [
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "Express", icon: "devicon-express-original colored" }
  ]
},{
  nombre: "Spring Quiz",
  descripcion: "Aplicación web tipo quiz desarrollada con Spring Boot en el backend y Thymeleaf en el frontend. Permite a los usuarios responder preguntas para obtener una puntuación y descubrir su animal espiritual. También registra las jugadas de los jugadores y muestra estadísticas.",
  link: "https://github.com/luisfelizbeltre/quiz",
  image: "/quiz.png",
  skills: [
    { name: "Spring Boot", icon: "devicon-spring-plain colored" },
    { name: "Thymeleaf", icon: "devicon-thymeleaf-plain colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "H2 Database", icon: "devicon-h2-plain colored" },
    { name: "JPA", icon: "devicon-jpa-plain colored" }
  ]
}
,
  {nombre: "MemoraCaps",
  descripcion: "Aplicación para crear cápsulas digitales de recuerdos con multimedia, NFC y funciones colaborativas/heredables, desarrollada con Laravel y Vue 3.",
  link: "https://github.com/tu-usuario/memora-caps",
  image: "/memora caps.png",
  skills: [
    { name: "Laravel", icon: "devicon-laravel-plain colored" },
    { name: "Vue 3", icon: "devicon-vuejs-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" }
  ]
}

];
</script>

<style scoped>

/* Estilos de la sección */
.container{
  background-color: rgb(39, 40, 43);
}
.custom-icon{
  width: 100%;
  border-radius: 50%;
}
.skill{
display: flex;
align-items: center;
justify-content: center;
color: white;
width: 40px;
height: 40px;
border-radius: 50%;
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);


}

.skill i {
  font-size: 1.8rem;
}
.skill:hover{
  transform: scale(1.2);
  cursor:default
}
.skill-list{
  display: flex;
  row-gap: 10px;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;


}
.project-card:hover {
  transform: translateY(-5px);

}

.project-card {
  transition: transform 0.3s ease;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #0f100f;
  border: 1px solid #ffffff8e;
  text-align: left;
  


}

.projects {
  padding: 2rem 0;
  text-align: center;
}



.project-grid {
  display: grid;
  grid-template-columns: repeat( 3,1fr);
  gap: 1.5rem;
  padding: 20px;

}

h3 {
  margin-bottom: 0.5rem;
  color: #2ecc71;
  text-align: center;
}

p {
  margin-bottom: 1rem;
  color : white;
  font-size: 1.3rem;
}

.btn {
  background-color: #3498db;
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.btn:hover {
  background-color: rgb(33.1380753138, 125.1882845188, 186.8619246862);
}

.project-image{
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

/* Ajuste para pantallas pequeñas */
@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr); /* Dos columnas en pantallas medianas */
  }

}

/* Ajuste para pantallas muy pequeñas */
@media (max-width: 480px) {
  .project-grid {
    grid-template-columns: 1fr; /* Una columna en pantallas pequeñas */
  }
}
</style>