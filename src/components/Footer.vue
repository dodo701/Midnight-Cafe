<script setup>
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="brand">
          <h3>Midnight Cafe</h3>
          <p>편하게 이야기 나눠봐요!</p>
        </div>
        <div class="socials">
          <a href="https://discord.gg/Y8dbCSQ5F7">Discord</a>
          <a href="https://open.kakao.com/o/gH6chUPh">Kakao</a>
        </div>
      </div>
      <div class="copyright">
        &copy; 2026 Midnight Cafe. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 4rem 0 2rem;
  background: #020208;
  border-top: 1px solid var(--glass-border);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.brand h3 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.brand p {
  color: var(--color-text-muted);
}

.socials {
  display: flex;
  gap: 2rem;
}

.socials a {
  color: var(--color-text);
  font-weight: 600;
}

.socials a:hover {
  color: var(--color-accent);
}

.copyright {
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 2rem;
}
</style>
