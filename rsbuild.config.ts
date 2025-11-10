import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
export default defineConfig({
   html: {
    title: 'MistMirror ERP',
    favicon: './public/logo.png',
    meta: {
      description: '',
    },
  },
  plugins: [pluginVue()],
});
