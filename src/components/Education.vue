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
  background: linear-gradient(135deg, #ecf0f1, #dfe6e9);

}
.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
.education-item {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.education-item:hover {
  transform: translateY(-5px);
}
i {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #007bff;
}
.date {
  font-weight: bold;
  color: #666;
}


.education {
  padding: 2rem 0;
  text-align: center;
}
.education h2 {
  margin-bottom: 1rem;
  color: #3498db;
}
.education .education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
.education .education-grid .education-item {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease;
}
.education .education-grid .education-item:hover {
  transform: translateY(-5px);
}
.education .education-grid .education-item i {
  font-size: 2rem;
  color: #3498db;
  margin-bottom: 1rem;
}
.education .education-grid .education-item h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;
}
.education .education-grid .education-item p {
  font-size: 1rem;
  color: #666666;
  margin-bottom: 0.5rem;
}
.education .education-grid .education-item .date {
  font-size: 0.9rem;
  color: #3498db;
  font-weight: bold;
}

</style>
