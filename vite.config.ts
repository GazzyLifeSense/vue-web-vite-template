import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import eslint from "vite-plugin-eslint"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

// postcss插件
const postcssPlugins = [
  // 支持h-[40px]类似写法
  tailwindcss(),
  // 添加浏览器兼容样式前缀
  autoprefixer()
]

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [vue(), eslint()],
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: true,
    cors: true, // 允许跨域
    proxy: {
      "/api": {
        target: "http://0.0.0.0:3000",
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  css: {
    postcss: {
      plugins: postcssPlugins
    }
  }
})
