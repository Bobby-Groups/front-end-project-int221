<template>
    <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

<div class="min-h-screen min-w-screen flex flex-row bg-gray-100">
   
  <div class="flex flex-col w-auto bg-white rounded-r-3xl overflow-hidden">
      
    <div class="flex items-center justify-center h-20 shadow-md">
      <h1 class="text-3xl uppercase text-indigo-500">HousePaintto</h1>
    </div>
    <ul class="flex flex-col py-4">
      <li>
        <router-link to ="/" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
          <span class="text-sm font-medium">Home</span>
        </router-link >
      </li>
      <li>
        <router-link to ="/color" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-music"></i></span>
          <span class="text-sm font-medium">Color</span>
        </router-link>
      </li>
      <li>
        <router-link to ="/total" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-drink"></i></span>
          <span class="text-sm font-medium">Total</span>
        </router-link>
      </li>      
    </ul>
  </div>
  <div class="flex justify-center">
<slot>
      
  </slot>
  </div>
  
</div>
 

</template>

<script>
export default {
    props:{
        
    }
}
</script>