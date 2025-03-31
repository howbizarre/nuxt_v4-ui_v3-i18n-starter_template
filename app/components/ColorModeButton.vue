<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark"
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
  }
});
</script>

<template>
  <ClientOnly>
    <UButton :icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
             @click="isDark = !isDark"
             color="neutral"
             variant="link"
             aria-label="Color theme switcher"
             class="cursor-pointer" />
  </ClientOnly>
</template>