// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  plugins: [
    // 确保在服务器端渲染前运行
  ],

  modules: ["@ant-design-vue/nuxt"],

  routeRules:{

  },
  nitro: {
    database: {

    }
  }
})