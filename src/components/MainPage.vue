<script setup>
</script>

<template>
  <section id="Mainpage" class="Mainpage">
    <div class="main-content">
      <h1 class="main-title">Midnight <span class="highlight">Cafe</span></h1>
      <p class="subtitle">당신의 이야기가 시작되는 곳.</p>
      <div class="actions">
        <a href="https://discord.gg/UU9ZMu98Ps" class="btn-primary">가입학기!</a>
        <a href="#about" class="btn-secondary">둘러보기</a>
      </div>
    </div>
    <div class="main-visual">
       <!-- We can add an image or abstract shape here later -->
       <div class="glow-orb"></div>
    </div>
  </section>
</template>

<style scoped>
.Mainpage {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px; /* Space for navbar */
}

.main-content {
  text-align: center;
  z-index: 2;
}

.main-title {
  font-size: 5rem;
  margin-bottom: 1rem;
  animation: fadeInDown 1s ease-out;
}

.highlight {
  color: var(--color-primary);
  text-shadow: 0 0 20px var(--color-primary);
  animation: neonGlow 2s infinite alternate;
}

@keyframes neonGlow {
  from {
    text-shadow: 0 0 20px var(--color-primary);
  }
  to {
    text-shadow: 0 0 40px var(--color-primary), 0 0 80px var(--color-accent);
  }
}

.subtitle {
  font-size: 1.5rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease-out 0.3s backwards;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  animation: fadeInUp 1s ease-out 0.6s backwards;
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 700;
  box-shadow: 0 0 20px rgba(176, 38, 255, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(176, 38, 255, 0.6);
}

.btn-secondary {
  background: transparent;
  color: var(--color-text);
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 700;
  border: 1px solid var(--glass-border);
}

.btn-secondary:hover {
  background: var(--glass-border);
}

.glow-orb {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(75, 0, 130, 0.4) 0%, rgba(5, 5, 16, 0) 70%);
  z-index: 1;
  pointer-events: none;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
