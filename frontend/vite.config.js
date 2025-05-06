import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows external access (e.g., from your browser to container)
    watch: {
      usePolling: true, // enables polling so file changes in volume mounts are detected
      interval: 100,     // optional: sets polling interval (ms), tweak if needed
    },
  },
});
