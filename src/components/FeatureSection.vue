<script setup>
const features = [
  {
    title: "게임",
    description: "림버스 컴퍼니, 원신 등 다양한 게임 플레이어들이 당신을 기다리고 있어요!",
    icon: "🎮"
  },
  {
    title: "음악",
    description: "당신의 플레이리스트를 공유하고, 다른 사람들의 음악도 즐겨 봐요!",
    icon: "🎵"
  },
  {
    title: "창작",
    description: "그림, 소설, 글 등 다양한 창작 활동을 즐겨보세요! 당신의 작품을 공유하고, 다른 사람들과 의견을 나눠 봐요!",
    icon: "🎨"
  },
  {
    title: "대화",
    description: "음성 채팅, 카카오톡 대화방에서 편한 대화를 나누는 시간을 가져보세요!(미소녀도 존재함)",
    icon: "💬"
  }
]
</script>

<template>
  <section id="features" class="features-section">
    <div class="container">
      <h2 class="section-title">What We Offer</h2>
      <div class="features-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <div class="icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  padding: 8rem 0;
  background: var(--color-bg);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  padding: 2.5rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: var(--color-primary);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  opacity: 0;
  transition: opacity 0.3s;
}

.feature-card:hover::before {
  opacity: 1;
}

.icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.feature-card p {
  color: var(--color-text-muted);
  line-height: 1.6;
}
</style>
