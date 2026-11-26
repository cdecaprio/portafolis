<script setup>
import { profile } from '../data/portfolio'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="sobre-mi" class="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
    <SectionHeading number="01" title="Sobre mí" note="Perfil" />
    <div class="mx-auto grid max-w-[1400px] gap-10 pt-12 lg:grid-cols-[0.3fr_1fr] lg:gap-16">
      <p class="font-mono text-[10px] uppercase leading-relaxed tracking-[0.3em] text-white/35">
        Una línea<br />breve
      </p>
      <div>
        <p class="max-w-4xl text-xl font-medium leading-snug tracking-tight text-white/85 sm:text-3xl lg:text-4xl">
          {{ profile.about }}
        </p>
        <div class="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
          <span>Full Stack</span>
          <span class="text-pink-400/70">Python en curso</span>
          <span>Café & código</span>
        </div>
      </div>
    </div>
  </section>
</template>
