<script setup>
import NavBar from './components/NavBar.vue'
import MainPage from './components/MainPage.vue'
import AboutSection from './components/AboutSection.vue'
import FeatureSection from './components/FeatureSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app-container">
    <NavBar />
    <main>
      <MainPage />
      <AboutSection />
      <FeatureSection />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
