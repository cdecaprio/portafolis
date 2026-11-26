<script setup>
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="projectes" class="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
    <SectionHeading number="03" title="Proyectos" :note="`Índice / ${String(projects.length).padStart(2, '0')}`" />
    <div class="mx-auto max-w-[1400px]">
      <article
        v-for="(project, index) in projects"
        :key="project.id"
        class="group grid gap-4 border-b border-white/10 py-9 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8 sm:py-11"
      >
        <span class="font-mono text-xs text-pink-400 sm:pt-2">
          {{ String(index + 1).padStart(2, '0') }}
        </span>

        <div>
          <h3 class="text-xl font-bold uppercase tracking-tight text-white transition-colors group-hover:text-pink-300 sm:text-3xl lg:text-4xl">
            {{ project.name }}
          </h3>
          <p class="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
            {{ project.description }}
          </p>
          <div class="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
            <span v-for="tag in project.tags" :key="tag">/ {{ tag }}</span>
          </div>
        </div>

        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="w-fit font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300 transition-colors hover:text-white sm:mt-2"
        >
          Ver más ↗
        </a>
        <span v-else class="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25 sm:mt-2">
          Pronto
        </span>
      </article>
    </div>
  </section>
</template>
