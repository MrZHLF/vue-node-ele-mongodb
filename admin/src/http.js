import axios from  'axios'
import Vue from 'vue'

const http = axios.create({
    // baseURL: process.env.VUE_APP_API_URL || '/admin/api',
    baseURL: 'http://localhost:3000/admin/api'
  })

http.interceptors.request.use(config =>{
  config.headers.Authorization = 'Bearer ' + localStorage.token
  return config;
},error =>{
  return Promise.reject(error)
})

http.interceptors.response.use(res =>{
  return res;
},err=>{
  if(err.response.data.message){
    Vue.prototype.$message({
      type:"error",
      message:err.response.data.message
    })
  }
  
  return Promise.reject(err)
})



export default http