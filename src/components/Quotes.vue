<template>
    <section class="quotes">
        <div class="container">
            <div class="quote-box">
                <div class="quote">
                    <p>
                        {{ quote }}

                    </p>
                    
                    <p @click="getRandomQuote" class="refresh-icon">

                        <i class="fas fa-sync-alt"></i>



                    </p>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { ref, onMounted } from "vue";
import quotes from "../data/quotes.json";
const quote = ref(null);

onMounted(() => {
    getRandomQuote();
});

const getRandomQuote = () => {

    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote.value = "“"+quotes[randomIndex].content+"”"+" - "+quotes[randomIndex].author;
}

</script>

<style scoped>
.quotes {
    margin-bottom: 0;
    padding-bottom: 0;
    text-align: center;
}

.refresh-icon {
    display: inline-flex;
    justify-content: center;
    margin: auto;
    align-items: center;
    margin-top: 10px;
    font-size: 30px;
    cursor: pointer;
    color: #555;
    width: 33px; /* Asegura que el área del enlace sea del tamaño del icono */
    height: 33x;
}

.refresh-icon i {
    transition: transform 0.2s ease-in-out;
    font-size: 30px;

}

.refresh-icon:hover i{
    transform: rotate(360deg);
}
</style>