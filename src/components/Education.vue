

<template>
  <section id="education" class="education">
    <div class="container">
      <h2>Educación</h2>
      <hr>
      <div class="education-grid">
        <div data-aos="zoom-in-up" data-aos-duration="1000" v-for="(edu, index) in educationData" :key="index" class="education-item">
          <i :class="edu.icon"></i>
          <h3>{{ edu.title }}</h3>
         
          <p>{{ edu.institution }}</p>
          <p>{{ edu.description }}</p>
          <p>{{ edu.additionalInfo }}</p>
          <div>
            <p class="date">{{ edu.date }}</p>

          </div>
       
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const educationData = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'Grado Superior en Desarrollo de Aplicaciones Web',
    institution: 'IES Francisco de Goya',
    date: '2022 - 2024',
    description: "Especialización en frontend y backend.",
    additionalInfo: "Proyecto final sobre e-commerce con Vue y Node.js."
  },
  {
    icon: 'fas fa-certificate',
    title: 'Grado Medio Sistema Microinformatico y Redes',
    institution: 'IES Francisco de Goya',
    date: '2020 - 2022',
     description: "Enfoque en mantenimiento de sistemas.",
    additionalInfo: "Prácticas en empresa de soporte IT."
  },
  {
    icon: 'fas fa-certificate',
    title: 'Certificación en JavaScript',
    institution: '',
    date: '2022'
  }
];
</script>

<style scoped>
hr{
  width: 96%;
  height: 3px;
  background-color:#38db34;
  border: none;
  margin: 20px auto;
}
.education {
  padding: 40px 0;
  text-align: center;
  background-color: #171816;
  border-radius: 50px;

}
.education-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
.education-item {
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: left;
  background-color: black;
  width: 55%;
  border: solid 0.1px rgba(255, 255, 255, 0.267);

}
.education-item:nth-child(even){
  align-self: flex-end;
}

i {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #007bff;
}


.date {
  font-size: 0.9rem;
  color: #34db34b4;
  font-weight: bold;
}



h2 {
  margin-bottom: 1rem;
  color: #3498db;
  font-size: 2.5rem;
}


.education-item:hover {
  transform: translateY(-5px);
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #25bd32;
}
.education-item> p {
  font-size: 1.4rem;
  color: rgb(255, 255, 255);
  margin-bottom: 0.5rem;
  padding-left: 10px;
}

/* ===== Media Queries ===== */
@media (max-width: 768px) {
  .education-item {

  width: 100%;
  }
}

</style>
