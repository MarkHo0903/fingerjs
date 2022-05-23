import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: 'lib', outputDir: './dist/types' })],

  build: {
    lib: {
      name: 'Fingerjs',
      entry: path.resolve(__dirname, 'lib/index.ts'),
      fileName: (format) => `finger-print.${format}.js`,
    },
    rollupOptions: {
      external: ['detector-js', 'qiao-get-ip', '@fingerprintjs/fingerprintjs'],
      output: {
        globals: {
          'detector-js': 'DetectorJs',
          'qiao-get-ip': 'QiaoIpJs',
          '@fingerprintjs/fingerprintjs': 'FingerprintJs',
        },
        exports: 'named',
      },
      preserveEntrySignatures: 'strict',
    },
  },
});
