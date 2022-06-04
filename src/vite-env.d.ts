/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_IMG_BBP: string
	readonly VITE_APP_API_MERCADOLIBRE: string
	readonly VITE_APP_API_MERCADOLIBRE_EXPRESS: string
	readonly VITE_APP_SITE_ID: string
	readonly VITE_APP_IMAGES: string
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
