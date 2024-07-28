<script>
import AsideMenu from '@/components/AsideMenu.vue'

export default {
  components: {
    AsideMenu
  }
}
</script>

<template>
  <div class="app-layout">
    <AsideMenu class="aside-menu" />

    <main class="main-content">
      <RouterView />
    </main>

    <footer class="footer">
      <p class="mt-6 text-center">This is the footer</p>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  display: grid;
  grid-template-areas:
    'aside main'
    'footer footer';
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  height: 100vh;
}

@media screen and (max-width: 768px) {
  .app-layout {
    grid-template-areas:
      'aside'
      'main'
      'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
}

.aside-menu {
  grid-area: aside;
}

.main-content {
  grid-area: main;
  padding: 2rem;
}

.footer {
  grid-area: footer;
  height: 8rem;
  background-color: var(--body-bg);
}
</style>