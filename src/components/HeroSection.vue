<script setup>
import { profile } from '../data/portfolio'
</script>

<template>
  <section id="inicio" class="px-5 pb-24 pt-10 sm:px-8 lg:px-12 lg:pb-32 lg:pt-16">
    <div class="mx-auto max-w-[1400px]">
      <div
        class="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/35"
      >
        <span>Portfolio / Nº 01</span>
        <span>Barcelona · ES</span>
      </div>

      <div class="grid gap-14 pt-14 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10 lg:pt-20">
        <div class="fade-up">
          <p class="font-mono text-[11px] uppercase tracking-[0.35em] text-cyan-300">
            {{ profile.role }}
          </p>

          <h1 class="mt-6 text-[clamp(3.25rem,10vw,8rem)] font-bold uppercase leading-[0.85] tracking-[-0.055em]">
            <span class="block text-white">CARLA</span>
            <span class="block text-transparent [-webkit-text-stroke:1px_#f472b6]">DE CAPRIO</span>
          </h1>

          <p class="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            {{ profile.greeting }}
          </p>

          <div class="mt-10 flex flex-wrap gap-x-8 gap-y-4 font-mono text-[11px] uppercase tracking-[0.2em]">
            <a href="#projectes" class="border-b border-pink-400 pb-1 text-pink-400 transition-colors hover:text-pink-200">
              Índice de proyectos ↗
            </a>
            <a href="#contacte" class="border-b border-white/20 pb-1 text-white/55 transition-colors hover:text-white">
              Escríbeme ↗
            </a>
          </div>
        </div>

        <figure class="relative w-fit">
          <div class="absolute -inset-3 border border-pink-400/20"></div>
          <img
            :src="profile.avatar"
            :alt="`Retrato de ${profile.name}`"
            class="relative h-52 w-52 border border-pink-400/40 object-cover grayscale-[35%] sm:h-72 sm:w-72"
          />
          <figcaption class="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300/80">
            Fig. 01 —Retrato
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
