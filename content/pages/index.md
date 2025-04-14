# Nuxt & UI & I18n & Content

## TLDR;

If you don’t want to create the template step by step, you can directly clone the [nuxt_v4-ui_v3-i18n-starter_template](https://github.com/howbizarre/nuxt_v4-ui_v3-i18n-starter_template) repository and run it. Execute `npm install` and `npm run dev` in the project directory. It starts on port **3332**, which you can change in the `package.json` file.

## Step 1: Create a project with Nuxt 4

```bash
npm create nuxt <project-name>
```

I use `npm`, but this should not limit your choice. After the project is ready, the structure will be similar to the following:

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

At the time of writing this article, Nuxt 4 is in beta, so you need to make a few manual changes after installation. In the project's root directory, add a folder named `app` and move the `app.vue` file there, along with the `public` directory and everything in it. Then add the following line to the `nuxt.config.ts` file:
  
  ```ts
  export default defineNuxtConfig({
    //...
    future: { compatibilityVersion: 4 },
    //...
  });