/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_IMG_BBP: string
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
