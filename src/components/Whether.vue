<template>
    <div id="app">
        <div v-if="weatherData">
            <h1>{{ weatherData.municipio.NOMBRE_CAPITAL }}</h1>
            <p> {{ weatherData.temperatura_actual }} °C</p>
            <p>{{weatherData.stateSky.description}}</p>
            <p>{{weatherIcon}}</p>
            
        </div>

      
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const city = "Madrid,es"; // Ciudad de Madrid, España
const iconUrl = ref(null);
// Función para obtener el clima
const url = "https://www.el-tiempo.net/api/json/v2/provincias/28/municipios/28079";

const weatherData = ref(null);
const weatherDescription = ref(null);

const weatherIcon = ref(null); // Variable para la URL del icono

// Función para obtener el clima desde la API de el-tiempo.net
const getWeather = async () => {
    try {
        const response = await axios.get(url);
        weatherData.value = response.data;

        // Extraer la descripción del estado del cielo
        weatherDescription.value = weatherData.value.stateSky.description;

        // Asignar icono según la descripción del clima
        weatherIcon.value = getWeatherIcon(weatherDescription.value);

        console.log("Clima en Madrid:", weatherData.value);
        console.log("Descripción del clima:", weatherDescription.value);
        console.log("Icono del clima:", weatherIcon.value);
    } catch (error) {
        console.error("Error al obtener el clima:", error);
    }
};

// Función para asignar iconos según la descripción del clima
const getWeatherIcon = (description) => {
  const iconMap = {
    "Despejado": "☀️",
    "Soleado": "☀️",
    "Poco nuboso": "🌤️",
    "Intervalos nubosos": "⛅",
    "Nuboso": "☁️",
    "Muy nuboso": "☁️☁️",
    "Cubierto": "🌥️",
    "Cubierto con lluvia": "🌧️",
    "Cubierto con lluvia escasa": "🌦️" ,
    "Cubierto con lluvia moderada": "🌧️",
    "Cubierto con lluvia fuerte": "🌧️🌧️",
    "Cubierto con chubascos": "🌦️",
    "Cubierto con chubascos tormentosos": "⛈️",
    "Cubierto con tormenta": "⛈️",
    "Cubierto con tormenta con lluvia": "⛈️🌧️",
    "Cubierto con tormenta eléctrica": "⛈️⚡",
    "Cubierto con granizo": "🌨️",
    "Cubierto con nieve": "❄️",
    "Cubierto con nieve débil": "🌨️",
    "Cubierto con nieve moderada": "❄️❄️",
    "Cubierto con nieve fuerte": "❄️❄️❄️",
    "Cubierto con agua nieve": "🌨️💧",
    "Cubierto con neblina": "🌫️",
    "Cubierto con niebla": "🌫️",
    "Cubierto con bruma": "🌫️",
    "Cubierto con calima": "🌆",
    "Cubierto con viento fuerte": "💨",
    "Cubierto con rachas muy fuertes": "💨💨",
    "Lluvia débil": "🌦️",
    "Lluvia moderada": "🌧️",
    "Lluvia fuerte": "🌧️🌧️",
    "Chubascos": "🌦️",
    "Chubascos tormentosos": "⛈️",
    "Tormenta": "⛈️",
    "Tormenta con lluvia": "⛈️🌧️",
    "Tormenta eléctrica": "⛈️⚡",
    "Granizo": "🌨️",
    "Nieve": "❄️",
    "Nieve débil": "🌨️",
    "Nieve moderada": "❄️❄️",
    "Nieve fuerte": "❄️❄️❄️",
    "Agua nieve": "🌨️💧",
    "Neblina": "🌫️",
    "Niebla": "🌫️",
    "Bruma": "🌫️",
    "Calima": "🌆",
    "Viento fuerte": "💨",
    "Rachas muy fuertes": "💨💨",
    "Tornado": "🌪️",
    "Huracán": "🌀",
    "Tormenta tropical": "🌀",
    "Ciclón": "🌀",
    "Tifón": "🌀",
    "Sequía": "☀️🔥",
    "Incendio forestal": "🔥",
    
  
};


    return iconMap[description] || ""; // Si no hay coincidencia, usa un icono por defecto
};

// Llamada a la API cuando el componente se monta
onMounted(() => {
    getWeather();
});
</script>

<style scoped>
.container {
  position: relative;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-grid {
  display: flex;
  justify-content: center;
  align-items: center;
}

.whether {
  position: fixed;  
  top: 0px;           
  right: 20px;         
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 8px;  
  color: rgb(145, 90, 90);        
  font-family: Arial, sans-serif;
}

.whether h2 {
  font-size: 1em;
  margin: 0;
}

.whether p {
  font-size: .9em;
  margin: 5px 0;
}
.whether p:nth-child(4) {
  font-size: 1.7em;
  margin: 5px 0;
}
.weather-info img {
  width: 40px;  
  height: 40px;
}
</style>