import { createApp } from 'vue'
import App from './App.vue'
//test call backend
import axiosAdaper from './infra/http/adapter'

axiosAdaper.get('/notification').then(result=>{
    console.log(result);
    
})

createApp(App).mount('#app')
