<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/10 px-5 py-9 sm:px-8 lg:px-12">
    <div class="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
      <span>© {{ year }} Carla de Caprio</span>
      <span>Edición digital · Vue + Tailwind</span>
    </div>
  </footer>
</template>
