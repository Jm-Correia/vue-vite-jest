import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({mode}) =>{
  //const env = {...process.env, ...loadEnv(mode, process.cwd())}
  
  //console.log(env.VITE_API, mode)
  return defineConfig({
    plugins: [vue()],
    server:{
      proxy: {
        '/api':{
          target: 'http://localhost:3000/v1/',
          changeOrigin: true
        }
      }, 
    },
   
    
  })
}

