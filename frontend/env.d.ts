interface ImportMetaEnv {
    readonly VITE_API: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }