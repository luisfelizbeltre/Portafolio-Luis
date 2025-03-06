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
    link: "https://projectsync.com",
    image:"/projectsync.png",
    skills: [
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored"},
      { name: "Vue.js", icon: "devicon-vuejs-plain colored"},
      { name: "Spring Framework", icon: "devicon-spring-plain colored"},
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored"},
      { name: "JavaScript", icon: "/jwt.png" }
    ]
    
  },
  {
  nombre: "Quiz App en Spring Boot",
  descripcion: "Aplicación de cuestionarios interactivos desarrollada con Spring Boot, que permite crear, gestionar y responder preguntas en tiempo real.",
  link: "https://github.com/tu-repo",
  image: "/projectsync.png",
  skills: [
    { name: "Spring Boot", icon: "devicon-spring-plain colored" },
    { name: "Thymeleaf", icon: "devicon-html5-plain colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name :"MySQL", icon: "devicon-mysql-plain colored" }
  ]
},{
  nombre: "Quiz App en Spring Boot",
  descripcion: "Aplicación de cuestionarios interactivos desarrollada con Spring Boot, que permite crear, gestionar y responder preguntas en tiempo real.",
  link: "https://github.com/tu-repo",
  image: "/doctorvoltio.png",
  skills: [
    { name: "Spring Boot", icon: "devicon-spring-plain colored" },
    { name: "Thymeleaf", icon: "devicon-html5-plain colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name :"MySQL", icon: "devicon-mysql-plain colored" }
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
  font-size: 1.5rem;
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
  background-color: black;
  border: 1px solid #ffffff8e;
  


}

.projects {
  padding: 2rem 0;
  text-align: center;
}

h2 {
  margin-bottom: 1rem;
  color: #3498db;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 20px;

}

h3 {
  margin-bottom: 0.5rem;
  color: #38db34;
}

p {
  margin-bottom: 1rem;
  color : white;
}

.btn {
  background-color: #3498db;
  color: #fff;
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
</style>