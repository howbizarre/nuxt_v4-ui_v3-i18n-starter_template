<template>
  <UApp class="relative">
    <NuxtRouteAnnouncer />
    <main class="sm:pl-[50px] sm:pb-0 max-sm:pl-0 max-sm:pb-[50px]">
      <ColorModeButton />
      <LangSwitcher />

      <UContainer class="pt-3 pb-3 sm:pb-6 lg:pb-8 mx-0">
        <slot />
      </UContainer>
    </main>
  </UApp>
</template>

<style>
body,
html {
  @apply flex flex-col;
}

html {
  @apply h-full w-full;
}

body {
  @apply min-h-full min-w-full bg-gray-200 dark:bg-gray-800 relative;
}
</style>