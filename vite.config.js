import {fileURLToPath, URL} from 'url';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  plugins: [vue(), vuetify()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@assets',
        replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
      {
        find: '@cmp',
        replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
      },
      {
        find: '@stores',
        replacement: fileURLToPath(new URL('./src/stores', import.meta.url)),
      },
      {
        find: '@use',
        replacement: fileURLToPath(new URL('./src/use', import.meta.url)),
      },
    ],
  },
  server: {
    base: '/gui/',
  },
  build: {
    outDir: '../gui',
    sourcemap: true,
  },
  define: {
    __APP_VERSION__: JSON.stringify('v0.0.1'),
    __API_URL__: 'window.__backend_api_url',
    __APP_TIMEOUT__: 2000,
  },
});
