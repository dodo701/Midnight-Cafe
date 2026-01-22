<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <nav class="navbar">
    <div class="logo">Midnight Cafe</div>
    
    <!-- Desktop Menu -->
    <div class="menu desktop-menu">
      <a href="#Mainpage">Home</a>
      <a href="#about">About</a>
      <a href="#features">Features</a>
      <a href="https://discord.gg/UU9ZMu98Ps" class="cta-link">Join Discord</a>
    </div>

    <!-- Mobile Menu Toggle -->
    <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <!-- Mobile Sidebar -->
    <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
      <button class="close-btn" @click="closeMenu">&times;</button>
      <a href="#Mainpage" @click="closeMenu">Home</a>
      <a href="#about" @click="closeMenu">About</a>
      <a href="#features" @click="closeMenu">Features</a>
      <a href="https://discord.gg/UU9ZMu98Ps" class="cta-link" @click="closeMenu">Join Discord</a>
    </div>
    
    <!-- Overlay -->
    <div class="overlay" :class="{ 'is-open': isMenuOpen }" @click="closeMenu"></div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--glass-border);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  box-sizing: border-box;
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(176, 38, 255, 0.5);
}

.desktop-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.desktop-menu a {
  font-weight: 600;
  color: var(--color-text-muted);
  position: relative;
  transition: color 0.3s ease;
}

.desktop-menu a:hover {
  color: var(--color-text);
}

.cta-link {
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease !important;
}

.cta-link:hover {
  background: var(--color-primary);
  color: #fff;
  box-shadow: 0 0 15px var(--color-primary);
}

/* Mobile Styles */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: var(--color-text);
  border-radius: 3px;
  transition: 0.3s;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: -300px; /* Hidden by default */
  width: 250px;
  height: 100vh;
  background: #0a0b1e;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  transition: left 0.3s ease-in-out;
  z-index: 200;
  border-right: 1px solid var(--glass-border);
  box-shadow: 5px 0 15px rgba(0,0,0,0.5);
}

.mobile-menu.is-open {
  left: 0;
}

.mobile-menu a {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text);
  text-decoration: none;
}

.close-btn {
  align-self: flex-end;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 150;
  backdrop-filter: blur(2px);
}

.overlay.is-open {
  opacity: 1;
  pointer-events: auto;
}

@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }
  .menu-toggle {
    display: flex;
  }
}
</style>
