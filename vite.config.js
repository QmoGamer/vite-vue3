import {defineConfig} from 'vite';
import {fileURLToPath, URL} from 'url';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 別名
    alias: {'@': fileURLToPath(new URL('./src', import.meta.url))},
    // 省略副檔名
    extensions: ['.js', '.vue'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/assets/styles/variables.scss' as *;`,
      },
    },
    devSourcemap: true,
  },
});
