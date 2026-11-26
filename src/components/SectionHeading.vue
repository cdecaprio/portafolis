<script setup>
defineProps({
  number: { type: String, required: true },
  title: { type: String, required: true },
  note: { type: String, default: '' },
})
</script>

<template>
  <div class="border-t border-white/10 px-5 py-6 sm:px-8 lg:px-12">
    <div class="mx-auto flex max-w-[1400px] items-baseline justify-between gap-4">
      <div class="flex items-baseline gap-4 sm:gap-7">
        <span class="font-mono text-xs text-pink-400">/{{ number }}</span>
        <h2 class="text-2xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
          {{ title }}
        </h2>
      </div>
      <span
        v-if="note"
        class="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 sm:block"
      >
        {{ note }}
      </span>
    </div>
  </div>
</template>
