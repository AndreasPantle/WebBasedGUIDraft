import config from 'eslint-config-xo';
import xoSpace from 'eslint-config-xo/space';
import {defineConfig} from 'eslint/config';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default defineConfig(
  [
    config,
    xoSpace,
  ],
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      // Override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    },
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  },
);
