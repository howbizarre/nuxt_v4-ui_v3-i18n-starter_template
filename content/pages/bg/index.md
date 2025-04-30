# Nuxt & UI & I18n & Content

## TLDR;

Ако не искате да създавате стъпка по стъпка шаблона, може директно да клонирате репозиторито [nuxt_v4-ui_v3-i18n-starter_template](https://github.com/howbizarre/nuxt_v4-ui_v3-i18n-starter_template "GitHub репозиторито за шаблона") и да го стартирате. Изпълнявате `npm install` и `npm run dev` в директорията на проекта. Стартира се на порт **3332**, който може да промените в `package.json` файла.

## Създаване на проект с Nuxt 4

```bash
npm create nuxt@latest
```

Ползвам `npm`, но това да не Ви ограничава в избора. Следвайте инструкциите до избора, кои от официалните Nuxt модули да се инсталират - избирате `@nuxt/content` и `@nuxt/ui`. След края на инсталацията, структурата на проекта трябва изглежда по следния начин:

```bash
├─.nuxt
├─.output
├─node_modules
├─public
├─server
│ .gitignore
│ app.vue
│ nuxt.config.ts
│ package─lock.json
│ package.json
│ README.md
│ tsconfig.json
```

Към момента на писане на статията Nuxt 4 е в бета версия и е необходимо да направите ръчно няколко промени след инсталацията. В основната директория на проекта добавяте папка `<root>/аpp` и в нея преместете файла `app.vue`. След това добавете ред в `nuxt.config.ts` файла:
  
```ts
// <root>/nuxt.config.ts
export default defineNuxtConfig({
  //...
  future: { compatibilityVersion: 4 },
  //...
});
```

След това в `<root>/аpp` добавете директория `assets` и в нея добавете `css` директория. В нея добавете `main.css` файл, в който ще импортирате Tailwind CSS и @nuxt/ui.

```css
/* <root>/app/assets/css/main.css */
@import "tailwindcss";
@import "@nuxt/ui";
```

След това в `nuxt.config.ts` файла добавете следния ред, за да импортирате CSS файла:

```ts
// <root>/nuxt.config.ts
export default defineNuxtConfig({
  //...
  css: ['~/assets/css/main.css'],
  //...
});
```

Следващия файл, който трябва ще добавим е `app.config.ts`. Като начало не е нужен, но с напредване на проекта ще Ви бъде много удобно, че го има вече. Той се намира в `<root>/аpp` директорията. В него добавяме следния код:

```ts
// <root>/app/app.config.ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc'
    }
  }
});
```

Стигнахме до настройките на `content` модула на Nuxt. В основната директория създаваме файл `content.config.ts` и добавяме следния код:

```ts
// <root>/content.config.ts
import { defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
});
```

След това създаваме папка `content` в основната директория на проекта и в нея добавяме файл с име `index.md`.

```md
<!-- <root>/content/index.md -->
# My First Page

Here is some content.
```

Отиваме в `<root>/app` директорията и добавяме `pages` директория. В нея добавяме `index.vue` файл с следното съдържание:

```vue
<!-- <root>/app/pages/index.vue -->
<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
</template>
```

Остана да добавим и поддръжка на повече от един език към проекта. Става сравнително лесно с [Nuxt I18n](https://i18n.nuxtjs.org/ "Nuxt I18n модул") модула. и Nuxt CLI.

```bash
npx nuxi@latest module add @nuxtjs/i18n
```

Горната команда ще добави модула и в `nuxt.config.ts` файла, но все пак проверете дали го виждате. Ако случайно не е добавен, обновете файла:

```ts
// <root>/nuxt.config.ts
export default defineNuxtConfig({
  //...
  modules: ['@nuxtjs/i18n'],
  //...
});
```

След това добавете `i18n` конфигурация в `nuxt.config.ts` файла:

```ts
// <root>/nuxt.config.ts
export default defineNuxtConfig({
  //...
  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en-US.json' },
      { code: 'bg', name: 'Български', iso: 'bg-BG', file: 'bg-BG.json' }
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts'
  }
});
```

Разбира се - използвайте Вашите локализации. Моя майчински език е Български, затова фигурира в конфигурацията.