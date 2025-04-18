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

console.log(props);



</script>

<template>
    <Head title="Mi Portafolio" />
    
    <div class="min-h-screen bg-black">
        <!-- Header/Navbar -->
        <nav class="bg-black shadow-lg border-b border-pink-300/10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <h1 class="text-2xl font-bold text-pink-500">Mi Portafolio</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="#sobre-mi" class="text-gray-300 hover:text-pink-500 transition-colors">Sobre Mí</a>
                        <a href="#habilitats" class="text-gray-300 hover:text-pink-500 transition-colors">Habilidades</a>
                        <a href="#projectes" class="text-gray-300 hover:text-pink-500 transition-colors">Proyectos</a>
                        <a href="#contacte" class="text-gray-300 hover:text-pink-500 transition-colors">Contacto</a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="py-20 bg-gradient-to-b from-pink-500/50 to-black">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <img src="storage/images/carla_trafic.jpg" alt="Carla" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-pink-500">
                    <h2 class="text-4xl font-bold text-pink-500 mb-4">¡Hola! Soy la Carla</h2>
                    <p class="text-xl text-gray-300">Desarrolladora Web Full Stack</p>
                </div>
            </div>
        </section>

        <!-- Sobre Mi -->
        <section id="sobre-mi" class="py-16 bg-black">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-pink-500 mb-8 text-center">Sobre Mí</h2>
                <p class="text-lg text-gray-300 text-center max-w-3xl mx-auto">
                    Soy una desarrolladora web apasionada por crear soluciones innovadoras y eficientes.
                    Me especializo en el desarrollo full stack y me encanta aprender nuevas tecnologías.
                </p>
            </div>
        </section>

        <!-- Habilidades -->
        <section id="habilitats" class="py-16 bg-pink-950/30">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-pink-500 mb-8 text-center">Mis Habilidades</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div class="p-6 bg-black/50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-pink-500/20">
                        <h3 class="text-xl font-semibold text-pink-500 mb-2">Frontend</h3>
                        <p class="text-gray-300">HTML, CSS, JavaScript, Vue.js</p>
                    </div>
                    <div class="p-6 bg-black/50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-pink-500/20">
                        <h3 class="text-xl font-semibold text-pink-500 mb-2">Backend</h3>
                        <p class="text-gray-300">PHP, Laravel, MySQL</p>
                    </div>
                    <div class="p-6 bg-black/50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-pink-500/20">
                        <h3 class="text-xl font-semibold text-pink-500 mb-2">DevOps</h3>
                        <p class="text-gray-300">Git, Docker, AWS</p>
                    </div>
                    <div class="p-6 bg-black/50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-pink-500/20">
                        <h3 class="text-xl font-semibold text-pink-500 mb-2">Otros</h3>
                        <p class="text-gray-300">REST APIs, Testing</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Proyectos -->
        <section id="projectes" class="py-16 bg-black">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-pink-500 mb-8 text-center">Mis Proyectos</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-black/50 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-pink-500/20">
                        <div v-for="project in props.project" :key="project.id" class="p-6">
                            <h3 class="text-xl font-semibold text-pink-500 mb-2">{{ project.name }}</h3>
                            <p class="text-gray-300 mb-4">{{ project.description }}</p>
                           <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover rounded-lg mb-4">
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        </section>

        <!-- Contacto -->
        <section id="contacte" class="py-16 bg-pink-950/30">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-pink-500 mb-8 text-center">Contacto</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p class="text-lg text-gray-300 mb-4">
                            ¿Interesado en trabajar juntos? ¡Contáctame!
                        </p>
                        <div class="space-y-4">
                            <p class="text-gray-300">
                                <span class="font-semibold text-pink-500">Email:</span> tu@email.com
                            </p>
                            <p class="text-gray-300">
                                <span class="font-semibold text-pink-500">LinkedIn:</span> linkedin.com/in/tuusuario
                            </p>
                            <p class="text-gray-300">
                                <span class="font-semibold text-pink-500">GitHub:</span> github.com/tuusuario
                            </p>
                        </div>
                    </div>
                    <div>
                        <form class="space-y-4">
                            <div>
                                <label class="block text-gray-300 mb-2">Nombre</label>
                                <input type="text" class="w-full px-4 py-2 bg-black/50 border border-pink-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-300">
                            </div>
                            <div>
                                <label class="block text-gray-300 mb-2">Email</label>
                                <input type="email" class="w-full px-4 py-2 bg-black/50 border border-pink-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-300">
                            </div>
                            <div>
                                <label class="block text-gray-300 mb-2">Mensaje</label>
                                <textarea class="w-full px-4 py-2 bg-black/50 border border-pink-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-300" rows="4"></textarea>
                            </div>
                            <button type="submit" class="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black text-white py-8 border-t border-pink-500/20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p>&copy; 2024 Mi Portafolio. Todos los derechos reservados.</p>
            </div>
        </footer>
    </div>
</template>
