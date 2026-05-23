import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite'; // <-- Import Nitro's vite integration

export default defineConfig({
  plugins: [
    tanstackStart(), 
    nitro(), // <-- Add nitro here
    viteReact()
  ],
});