<script setup>
import PosterHeader from './components/PosterHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#07070d] font-display text-white">
    <!-- Fondo editorial: rejilla + halos de neón -->
    <div class="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px]"
      ></div>
      <div class="absolute -top-48 left-1/4 h-[520px] w-[520px] rounded-full bg-pink-600/20 blur-[150px]"></div>
      <div class="absolute left-[55%] top-[55%] h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-[150px]"></div>
      <div class="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-fuchsia-700/10 blur-[130px]"></div>
    </div>

    <div class="relative z-10">
      <PosterHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  </div>
</template>
