# Starter template for Nuxt v4 projects including Nuxt UI v3 and Nuxt i18n module.

This template was created to help web developers jumpstart their development with the upcoming version 4 of Nuxt.

It incorporates **Nuxt 4** with **Composition API** and **TypeScript** support and includes **Nuxt UI v3** with the backing for Internationalization through the **Nuxt I18n module** and **Dark Themes**. The **Heroicons** have been included as the default icon pack for **Nuxt UI**.

## Directory structure

```bash
PROJECT ROOT
|
|   .gitignore
|   app.config.ts
|   LICENSE.md
|   nuxt.config.ts
|   package-lock.json
|   package.json
|   README.md
|   tsconfig.json
|   |
+---app
|   |   app.vue
|   |   
|   +---assets
|   |   \---css
|   |           main.css
|   |           
|   +---components
|   |       ColorModeButton.vue
|   |       LangSwitcher.vue
|   |       
|   +---pages
|   |       index.vue
|   |       
|   \---public
|           favicon.ico
|           robots.txt
|           
+---i18n
|   |   i18n.config.ts
|   |   
|   \---locales
|           bg-BG.json
|           en-US.json
|           
|           
\---server
        tsconfig.json
```