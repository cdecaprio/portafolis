<script setup>
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  project: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <Head title="Mi Portafolio" />

  <div class="min-h-screen bg-white text-gray-800">
    <!-- Header/Navbar -->
    <nav class="bg-white shadow-lg border-b border-pink-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-between items-center h-auto py-4 md:h-16">
          <h1 class="text-3xl font-bold text-pink-500 tracking-wide w-full md:w-auto text-center md:text-left">Mi Portafolio</h1>
          <div class="flex justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0 space-x-4 flex-wrap">
            <a href="#sobre-mi" class="text-gray-700 hover:text-pink-400 transition-colors">Sobre Mí</a>
            <a href="#habilitats" class="text-gray-700 hover:text-pink-400 transition-colors">Habilidades</a>
            <a href="#projectes" class="text-gray-700 hover:text-pink-400 transition-colors">Proyectos</a>
            <a href="#contacte" class="text-gray-700 hover:text-pink-400 transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-b from-pink-100 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img src="storage/images/carla_trafic.jpg" alt="Carla" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-pink-300">
        <h2 class="text-4xl font-bold text-pink-500 mb-4">¡Hola! Soy la Carla</h2>
        <p class="text-xl text-gray-600">Desarrolladora Web Full Stack</p>
      </div>
    </section>

    <!-- Sobre Mi -->
    <section id="sobre-mi" class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-pink-500 mb-8 text-center">Sobre Mí</h2>
        <p class="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Soy una desarrolladora web apasionada por crear soluciones innovadoras y eficientes.
          Me especializo en el desarrollo full stack y me encanta aprender nuevas tecnologías.
        </p>
      </div>
    </section>

    <!-- Habilidades -->
    <section id="habilitats" class="py-16 bg-pink-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-pink-500 mb-8 text-center">Mis Habilidades</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div class="p-6 bg-white rounded-xl shadow-md border border-pink-200">
            <h3 class="text-xl font-semibold text-pink-500 mb-2">Frontend</h3>
            <p class="text-gray-600">HTML, CSS, JavaScript, Vue.js</p>
          </div>
          <div class="p-6 bg-white rounded-xl shadow-md border border-pink-200">
            <h3 class="text-xl font-semibold text-pink-500 mb-2">Backend</h3>
            <p class="text-gray-600">PHP, Laravel, MySQL</p>
          </div>
          <div class="p-6 bg-white rounded-xl shadow-md border border-pink-200">
            <h3 class="text-xl font-semibold text-pink-500 mb-2">DevOps</h3>
            <p class="text-gray-600">Git, Docker, AWS</p>
          </div>
          <div class="p-6 bg-white rounded-xl shadow-md border border-pink-200">
            <h3 class="text-xl font-semibold text-pink-500 mb-2">Otros</h3>
            <p class="text-gray-600">REST APIs, Testing</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Proyectos -->
    <section id="projectes" class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-pink-500 mb-8 text-center">Mis Proyectos</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in props.project" :key="project.id" class="bg-white rounded-xl shadow-md overflow-hidden border border-pink-200">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-pink-500 mb-2">{{ project.name }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <img v-if="project.image" :src="project.image" :alt="project.name" class="w-full h-48 object-cover rounded-lg mb-4">
              <a v-if="project.link" :href="project.link" target="_blank" class="inline-block mt-2 text-pink-500 hover:text-pink-400 transition-colors underline">Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto -->
    <section id="contacte" class="py-16 bg-pink-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-pink-500 mb-8 text-center">Contacto</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p class="text-lg text-gray-600 mb-4">¿Interesado en trabajar juntos? ¡Contáctame!</p>
            <div class="space-y-4">
              <p class="text-gray-600">
                <span class="font-semibold text-pink-500">Email:</span> tu@email.com
              </p>
              <p class="text-gray-600">
                <span class="font-semibold text-pink-500">LinkedIn:</span> linkedin.com/in/tuusuario
              </p>
              <p class="text-gray-600">
                <span class="font-semibold text-pink-500">GitHub:</span> github.com/tuusuario
              </p>
            </div>
          </div>
          <div>
            <form class="space-y-4">
              <div>
                <label class="block text-gray-600 mb-2">Nombre</label>
                <input type="text" class="w-full px-4 py-2 bg-white border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-700">
              </div>
              <div>
                <label class="block text-gray-600 mb-2">Email</label>
                <input type="email" class="w-full px-4 py-2 bg-white border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-700">
              </div>
              <div>
                <label class="block text-gray-600 mb-2">Mensaje</label>
                <textarea class="w-full px-4 py-2 bg-white border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-700" rows="4"></textarea>
              </div>
              <button type="submit" class="bg-pink-400 text-white px-6 py-2 rounded-lg hover:bg-pink-300 transition-colors focus:outline-none focus:ring-4 focus:ring-pink-200">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white text-gray-600 py-8 border-t border-pink-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2024 Mi Portafolio. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>