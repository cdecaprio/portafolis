<script setup>
import { computed } from 'vue'
import { contact } from '../data/portfolio'
import SectionHeading from './SectionHeading.vue'

const links = computed(() => [
  { label: 'Email', short: '@', href: `mailto:${contact.email}` },
  { label: 'LinkedIn', short: 'in ↗', href: contact.linkedin },
  { label: 'GitHub', short: 'gh ↗', href: contact.github },
])
</script>

<template>
  <section id="contacte" class="bg-white/[0.02] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
    <SectionHeading number="04" title="Contacto" note="Abrir canal" />
    <div class="mx-auto grid max-w-[1400px] gap-14 pt-12 lg:grid-cols-2 lg:gap-20">
      <div>
        <p class="font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
          {{ contact.message }}
        </p>
        <a
          :href="`mailto:${contact.email}`"
          class="mt-8 block break-all text-2xl font-bold tracking-tight text-white transition-colors hover:text-pink-300 sm:text-4xl"
        >
          {{ contact.email }}
        </a>
      </div>

      <div class="border-t border-white/10">
        <a
          v-for="item in links"
          :key="item.label"
          :href="item.href"
          :target="item.label === 'Email' ? undefined : '_blank'"
          :rel="item.label === 'Email' ? undefined : 'noopener noreferrer'"
          class="flex items-center justify-between border-b border-white/10 py-6 font-mono text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-pink-300"
        >
          <span>{{ item.label }}</span>
          <span class="text-cyan-300">{{ item.short }}</span>
        </a>
      </div>
    </div>
  </section>
</template>
