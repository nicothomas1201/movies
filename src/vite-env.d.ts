/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_TOKEN: string
  readonly VITE_API_KEY: string
  readonly VITE_API_IMAGES: string
  readonly VITE_AI_API_KEY: string
  readonly VITE_EMAIL_SERVICE_ID: string
  readonly VITE_EMAIL_TEMPLATE_ID: string
  readonly VITE_EMAIL_PUBLIC_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
