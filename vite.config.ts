import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve('./src'),
			'@components': path.resolve('./src/components'),
			'@pages': path.resolve('./src/pages'),
		},
	},
})
