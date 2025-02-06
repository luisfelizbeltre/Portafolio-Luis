<script setup>
const educationData = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'Grado Superior en Desarrollo de Aplicaciones Web',
    institution: 'IES [Francisco de Goya]',
    date: '2022 - 2024'
  },
  {
    icon: 'fas fa-certificate',
    title: 'Grado Medio Sistema Microinformatico y Redes',
    institution: 'IES [Francisco de Goya]',
    date: '2020 - 2022'
  },
  {
    icon: 'fas fa-certificate',
    title: 'Certificación en JavaScript',
    institution: 'Plataforma [Nombre de la Plataforma]',
    date: '2022'
  }
];
</script>

<template>
  <section id="education" class="education">
    <div class="container">
      <h2>Educación</h2>
      <div class="education-grid">
        <div v-for="(edu, index) in educationData" :key="index" class="education-item">
          <i :class="edu.icon"></i>
          <h3>{{ edu.title }}</h3>
          <p>{{ edu.institution }}</p>
          <p class="date">{{ edu.date }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education {
  padding: 40px 0;
  text-align: center;
  background-color: #e7f2fd;

}
.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
.education-item {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: left;

}

i {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #007bff;
}


.date {
  font-size: 0.9rem;
  color: #3498db;
  font-weight: bold;
}



h2 {
  margin-bottom: 1rem;
  color: #3498db;
}


.education-item:hover {
  transform: translateY(-5px);
}

h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;
}
p {
  font-size: 1rem;
  color: #666666;
  margin-bottom: 0.5rem;
}

</style>
