<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
});
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton :icon="isDark ? 'i-heroicons-moon-16-solid' : 'i-heroicons-sun-20-solid'"
             color="neutral"
             variant="ghost"
             class="cursor-pointer"
             size="md"
             @click="isDark = !isDark" />

    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
