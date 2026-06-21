/// <reference types="vite/client" />

// Defining meta environment to use in application
// And support typing in application
interface ImportMetaEnv {
    readonly VITE_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}