<script lang="ts" setup>
const { locale, locales } = useI18n();
const availableLocales = computed(() => locales.value.filter((lcl: any) => lcl.code !== locale.value));

watch(locale, () => useHead({ htmlAttrs: { lang: locale.value } }));
</script>

<template>
  <SwitchLocalePathLink v-for="locale in availableLocales" :key="locale.code" :locale="locale.code" class="btn btn-default">
    {{ locale.name }}
  </SwitchLocalePathLink>
</template>