

<template>
  <section id="skills" class="skills">
    <div class="father">

    
    <div class="container">
      <h2>Habilidades</h2>

      <div class="skills-grid">
        <div v-for="(category, index) in skillCategories" :key="index" class="skill-category" >
          <h3>{{ category.title }}</h3>
          <div class="skill-list">
            <div v-for="(skill, sIndex) in category.skills" :key="sIndex" class="skill"  data-aos="fade-up"
              data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-mirror="true" data-aos-once="false">
              <i :class="skill.icon"></i>
              <span>{{ skill.name }}</span>

            </div>
          </div>
        </div>
        <template v-if="showHidden">
          <div v-for="(category, index) in hiddenCategories" :key="'hidden-' + index" class="skill-category">
            <h3>{{ category.title }}</h3>
            <div class="skill-list">
              <div v-for="(skill, sIndex) in category.skills" :key="'hidden-skill-' + sIndex" class="skill"
                data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000"
                data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                <i :class="skill.icon"></i>
                <span>{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>

      <button @click="toggleHiddenCategories" class="toggle-button">
        {{ showHidden ? "Ver menos" : "Ver más" }}
      </button>
    </div>
  </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const skillCategories = ref([
  {
    title: "Lenguajes de Programación y Marcado",
    skills: [
      { name: "HTML", icon: "devicon-html5-plain colored", level: 10 },
      { name: "CSS", icon: "devicon-css3-plain colored", level: 85 },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 80 },
      { name: "Java", icon: "devicon-java-plain colored", level: 75 },
      { name: "PHP", icon: "devicon-php-plain colored", level: 70 },
    ],
  },
  {
    title: "Frameworks y Librerías",
    skills: [
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored", level: 90 },
      { name: "Vue.js", icon: "devicon-vuejs-plain colored", level: 75 },
      { name: "Laravel", icon: "devicon-laravel-plain colored", level: 70 },
      { name: "Spring Framework", icon: "devicon-spring-plain colored", level: 65 },
    ],
  },
  {
    title: "Herramientas de Desarrollo",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored", level: 90 },
      { name: "Docker", icon: "devicon-docker-plain colored", level: 75 },
      { name: "Visual Studio", icon: "devicon-visualstudio-plain colored", level: 80 },
      { name: "Eclipse", icon: "devicon-eclipse-plain colored", level: 70 },
      { name: "Figma", icon: "devicon-figma-plain colored", level: 85 },
    ],
  },
]);

const hiddenCategories = ref([
  {
    title: "Bases de Datos",
    skills: [{ name: "MySQL", icon: "devicon-mysql-plain colored", level: 85 }],
  },
  {
    title: "Tecnologías y Protocolos",
    skills: [
      { name: "API REST", icon: "devicon-api-plain colored", level: 80 },
      { name: "Microservicios", icon: "devicon-microservices-plain colored", level: 75 },
      { name: "REST", icon: "devicon-restapi-plain colored", level: 85 },
    ],
  },
  {
    title: "Plataformas y Servicios en la Nube",
    skills: [
      { name: "Amazon Web Services (AWS)", icon: "devicon-amazonwebservices-plain colored", level: 70 },
    ],
  },
]);

const showHidden = ref(false);
const toggleHiddenCategories = () => {
  showHidden.value = !showHidden.value;
};
</script>
<style scoped>

.container {
  padding: 2rem 0;
  text-align: center;
  transition: transform 0.1s ease, background 0.3s ease;
  background-color: #020202b9; /* Fondo oscuro coherente */
}

.skill:hover {
  transform: scale(1.2);
  cursor: default;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 1.5rem;
  padding: 20px;
}

.skill-category {
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.4s ease;
  background-color: #171816; /* Fondo oscuro coherente */
}

.skill-category:hover {
  transform: translateY(-5px);
}

.skills .skill-category h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #2ecc71; /* Verde unificado */
}

.skill-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  flex-wrap: wrap;
}

.skill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.skill i {
  font-size: 1.7rem;
}

.skill span {
  font-size: 1rem;
  font-weight: bold;
  color: #e0e0e0; /* Blanco suavizado */
}



.toggle-button {
  background-color: #3498db; /* Azul unificado */
  color: #000000; /* Blanco suavizado */
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 1.3em;
}

.toggle-button:hover {
  background-color: #2ecc71;
}

@media (max-width: 768px) {
  .skill-category{
border: #f5f5f59a solid 1px;
  }
  .skills-grid {
    grid-template-columns: 1fr;
    
  }

  .skill-list {
    grid-template-columns: 1fr;
    
  }
}
</style>