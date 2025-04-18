<script setup>
import { useForm } from '@inertiajs/vue3';
import TextInput from '@/Components/TextInput.vue';
import { ref } from 'vue';

const form = useForm({
  name: '',
  description: '',
  image: null,
});

const formHabilidad = useForm({
  nombre: '',
  descripcion: '',
});

const success = ref(false);

const props = defineProps({
  success: {
    type: Boolean,
    default: false,
  },
  project: {
    type: Array,
    default: () => [],
  },
});

const handleFileUpload = (event) => {
  form.image = event.target.files[0];
};
</script>
<template>
  <div class="min-h-screen bg-gradient-to-br from-black via-pink-900 to-black text-white py-12 px-4">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
      <!-- Formulario Crear Post -->
      <div class="w-full lg:w-1/2 bg-gray-950 bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-2xl p-10">
        <h1 class="text-4xl font-extrabold text-center text-pink-500 mb-8 tracking-wide">Crear un Nuevo Post</h1>
        <form @submit.prevent="form.post(route('panel.store'), { enctype: 'multipart/form-data' })" class="space-y-6">
          <div>
            <label class="block text-pink-400 text-xl font-medium mb-1">Título</label>
            <TextInput type="text"
              class="w-full px-4 py-2 bg-black/50 border border-pink-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-300"
              v-model="form.name" />
          </div>
          <div>
            <label class="block text-pink-400 text-xl font-medium mb-1">Contenido</label>
            <TextInput type="text"
              class="w-full px-4 py-2 bg-black/50 border border-pink-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-300"
              v-model="form.description" />
          </div>
          <div>
            <label class="block text-pink-400 text-xl font-medium mb-1">Imagen</label>
            <input type="file" @change="handleFileUpload"
              class="w-full px-4 py-2 bg-black/50 border border-pink-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-300" />
          </div>
          <div class="flex justify-center">
            <button type="submit" :disabled="form.processing"
              class="px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg font-medium transition-colors">
              Publicar
            </button>
          </div>
        </form>
        <transition name="fade">
          <div v-if="success" class="mt-6 text-center text-green-400 font-semibold text-lg">
            ¡Post publicado con éxito!
          </div>
        </transition>
      </div>

      <!-- Formulario Habilidades -->
      <div class="w-full lg:w-1/2 bg-gray-950 bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-2xl p-10">
        <h1 class="text-4xl font-extrabold text-center text-pink-500 mb-8 tracking-wide">Mis Habilidades</h1>
        <form @submit.prevent="formHabilidad.post(route('panel.habilidad.store'))" class="space-y-6">
          <div>
            <label class="block text-pink-400 text-xl font-medium mb-1">Nombre</label>
            <TextInput type="text"
              class="w-full px-4 py-2 bg-black/50 border border-pink-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-300"
              v-model="formHabilidad.nombre" />
          </div>
          <div>
            <label class="block text-pink-400 text-xl font-medium mb-1">Descripción</label>
            <TextInput type="text"
              class="w-full px-4 py-2 bg-black/50 border border-pink-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-300"
              v-model="formHabilidad.descripcion" />
          </div>
          <div class="flex justify-center">
            <button type="submit"
              class="px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg font-medium transition-colors">
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Galería de Posts -->
    <div class="mt-16 max-w-6xl mx-auto">
      <h1 class="text-4xl font-extrabold text-center text-pink-500 mb-8 tracking-wide">Mis Posts</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in props.project" :key="project.id"
          class="bg-gray-950 bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-2xl p-6">
          <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover rounded-lg mb-4">
          <h2 class="text-2xl font-bold text-pink-500 mb-2">{{ project.name }}</h2>
          <p class="text-gray-300">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
