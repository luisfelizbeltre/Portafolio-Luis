<template>
    <div class="relative w-full h-full pointer-events-none">
      <!-- Borde animado -->
      <div
        class="absolute inset-0 border border-transparent rounded-[inherit]"
        style="
          mask-image: linear-gradient(transparent, transparent),
            linear-gradient(#000, #000);
        "
      >
        <div
          ref="beam"
          class="absolute aspect-square"
          :style="{
            width: `${size}px`,
            background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
          }"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import gsap from "gsap";
  import { MotionPathPlugin } from "gsap/MotionPathPlugin";
  
  // Registrar el plugin de GSAP
  gsap.registerPlugin(MotionPathPlugin);
  
  // Props con valores por defecto
  const props = defineProps({
    size: { type: Number, default: 50 },
    duration: { type: Number, default: 6 },
    delay: { type: Number, default: 0 },
    colorFrom: { type: String, default: "#ffaa40" },
    colorTo: { type: String, default: "#9c40ff" },
    reverse: { type: Boolean, default: false },
    initialOffset: { type: Number, default: 0 },
  });
  
  const beam = ref(null);
  
  onMounted(() => {
    if (!beam.value) return;
  
    gsap.to(beam.value, {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: "100%", y: 0 },
          { x: "100%", y: "100%" },
          { x: 0, y: "100%" },
          { x: 0, y: 0 },
        ],
        align: beam.value,
        alignOrigin: [0.5, 0.5],
        autoRotate: true, // Para que siga la dirección del movimiento
      },
      duration: props.duration,
      repeat: -1,
      ease: "linear",
      delay: props.delay,
      yoyo: props.reverse, // Si `reverse` es true, animación en reversa
    });
  });
  </script>
  
  <style scoped>
  /* Estilos adicionales si los necesitas */
  </style>
  