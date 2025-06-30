import { defineConfig } from 'vite';
export default defineConfig({
  // Add this to fallback to older crypto APIs
  define: {
    'process.env': {}
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  }
});
