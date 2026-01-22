<script setup>
</script>

<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">About US</h2>
      <div class="content">
        <div class="text-block">
          <p>
            <strong>미드나잇 카페</strong> 에서는 다양한 사람들이 기다리고 있어요. 
            당신이 게임을 하든, 채팅을 하든, 아니면 그저 쉬러 왔을 때도, 카페는 언제나 당신을 환영해 줘요.
          </p>
          <p>
            2025년 12월에 설립된 저희 서버는, 수많은 멤버들과 함께 성장하고 있습니다. 
            어서 가입하고 저희와 함께 새로운 이야기를 만들어 봐요!
          </p>
        </div>
        <div class="stats-grid">
          <div class="stat-card">
            <h3>900+</h3>
            <p>Members</p>
          </div>
          <div class="stat-card">
            <h3>24/7</h3>
            <p>Active Voice</p>
          </div>
          <div class="stat-card">
            <h3>매일</h3>
            <p>Events</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 8rem 0;
  background: linear-gradient(180deg, var(--color-bg) 0%, #0a0b1e 100%);
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.text-block p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
}

.text-block strong {
  color: var(--color-text);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.stat-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
}

.stat-card h3 {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.stat-card p {
  color: var(--color-text-muted);
  font-weight: 600;
}

@media (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
  }
}
</style>
