<script setup>
import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="habilitats" class="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
    <SectionHeading number="02" title="Habilidades" note="Stack / 04 bloques" />
    <div class="mx-auto grid max-w-[1400px] border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
      <article
        v-for="(skill, index) in skills"
        :key="skill.title"
        class="group border-b border-r border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.04] sm:p-8"
      >
        <div class="flex items-start justify-between font-mono text-[10px]">
          <span class="text-pink-400">0{{ index + 1 }}</span>
          <span class="tracking-[0.2em] text-white/25">{{ skill.short }}</span>
        </div>
        <h3 class="mt-14 text-xl font-bold uppercase tracking-tight text-white transition-colors group-hover:text-pink-300 sm:mt-20 sm:text-2xl">
          {{ skill.title }}
        </h3>
        <p class="mt-3 text-sm leading-relaxed text-white/50">
          {{ skill.description }}
        </p>
      </article>
    </div>
  </section>
</template>
