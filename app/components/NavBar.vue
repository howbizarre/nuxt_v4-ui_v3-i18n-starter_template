<script lang="ts" setup>
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <nav class="flex justify-between items-center px-4 py-2 rounded-xl bg-gray-200/75 dark:bg-gray-800">
    <div class="flex items-center gap-2 sm:gap-4"">
      <NuxtLinkLocale :to="localePath('/')" class="flex items-center gap-1 p-1.5 sm:py-0.5 sm:px-0 rounded-full">
      <UIcon name="i-heroicons-home" class="size-4.5" />
      <span class="hidden sm:block">{{ t('LBL_HOME') }}</span>
      </NuxtLinkLocale>

      <NuxtLinkLocale :to="localePath('/info')" class="flex items-center gap-1 p-1.5 sm:py-0.5 sm:px-0 rounded-full">
        <UIcon name="i-heroicons-information-circle" class="size-5" />
        <span class="hidden sm:block">{{ t('LBL_INFO') }}</span>
      </NuxtLinkLocale>
    </div>

    <div class="flex items-center gap-2 sm:gap-1">
      <LangSwitcher />
      <ColorModeButton />
    </div>
  </nav>
</template>
