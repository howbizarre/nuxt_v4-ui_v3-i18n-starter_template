# Nuxt & UI & I18n & Content

## TLDR;

Ако не искате да създавате стъпка по стъпка шаблона, може директно да клонирате репозиторито [nuxt_v4-ui_v3-i18n-starter_template](https://github.com/howbizarre/nuxt_v4-ui_v3-i18n-starter_template) и да го стартирате. Изпълнявате `npm install` и `npm run dev` в директорията на проекта. Стартира се на порт **3332**, който може да промените в `package.json` файла.

## Създаване на проект с Nuxt 4

```bash
npm create nuxt <project-name>
```

Ползвам `npm`, но това да не Ви ограничава в избора. След като проекта е готов структурата ще е подобна на следната:

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
│ tree.txt
│ tsconfig.json
```

Към момента на писане на статията Nuxt 4 е в бета версия и е необходимо да направите ръчно няколко промени след инсталацията. В основната директория на проекта добавяте папка `аpp` и в нея преместете файла `app.vue` както и директорията `public` с всичко в нея. След това добавете ред в `nuxt.config.ts` файла:
  
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  //...
  future: { compatibilityVersion: 4 },
  //...
});
```

Стартирате проекта с `npm run dev`, заредете в браузъра `http://localhost:3332` и ще видите добре познатия NuxtWelcome екран.

## Добавяне на UI библиотеката на Nuxt

Може да следвате [документацията от сайта на Nuxt](https://nuxt.com/modules/ui#nuxt) с едно мъничко изключение - папката `assets` трябва да я създадете, не в основната директория на проекта, а в папката `app`. И все пак стъпките са:

```bash
npm install @nuxt/ui
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  //...
  modules: ['@nuxt/ui'],
  //...
});
```

```css
/* app/assets/css/main.css */
@import "tailwindcss";
@import "@nuxt/ui";
```

## Добавяне на i18n

```bash
npm install nuxt-i18n
```

```ts