// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],

  i18n: {
    lazy: true,
    // langDir 的值是刚刚创建 lang 文件夹名称
    langDir: 'i18n/lang',

    // 因为默认会去读取浏览器语言，所以如果你的浏览器语言不是 zh，
    // 那么你可能需要添加下面这一行才能在当前浏览器看到效果
    defaultLocale: 'zh',

    locales: [
      // zh.js 是 lang 目录下的 zh.js 文件
      { code: 'zh', file: 'zh.js', name: '中文' },
    ],
  },
})