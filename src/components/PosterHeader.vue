<script setup>
import { navLinks } from '../data/portfolio'
</script>

<template>
  <header class="border-b border-white/10 px-5 py-5 sm:px-8 lg:px-12">
    <div class="mx-auto flex max-w-[1400px] items-center justify-between gap-6">
      <a href="#inicio" class="flex items-center gap-3">
        <span class="h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_14px_#f472b6]"></span>
        <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-white/80 sm:text-xs">
          Carla / Portafolis
        </span>
      </a>

      <nav class="hidden items-center gap-7 lg:flex" aria-label="Navegación por secciones">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-pink-300"
        >
          {{ link.label }}
        </a>
      </nav>

      <span class="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 md:block">
        Ed. 2026
      </span>
    </div>
  </header>
</template>
