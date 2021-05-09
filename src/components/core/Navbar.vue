<template>
    <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

<div class="flex flex-row min-h-screen">
  <div class="flex flex-col w-auto bg-dark rounded-r-3xl overflow-hidden">
      
    <div class="flex items-center justify-center h-20 shadow-md p-5">
      <h1 class="text-3xl uppercase text-indigo-500">HousePaintto</h1>  </div>
    <ul class="flex flex-col py-4">
      <li>
        <router-link to ="/" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white"><i class="bx bx-home"></i></span>
          <span class="text-sm font-medium">Home</span>
        </router-link >
      </li>
      <li>
        <router-link to ="/color" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white"><i class="bx bx-music"></i></span>
          <span class="text-sm font-medium">Color</span>
        </router-link>
      </li>
      <li>
        <router-link to ="/total" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white"><i class="bx bx-coin"></i></span>
          <span class="text-sm font-medium">Total</span>
        </router-link>
      </li>    
       <li>
        <router-link to ="/team" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white"><i class='bx bx-drink'></i></span>
          <span class="text-sm font-medium">Team</span>
        </router-link>
      </li>
      <li>
        <router-link to ="/admin" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-500">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white"><i class="bx bx-lock-alt"></i></span>
          <span class="text-sm font-medium">Admin</span>
        </router-link>
      </li>   
    </ul>
    
  </div>
 <!-- <slot>
      
  </slot> -->
</div>
 
 

  
  
</template>

<script>
export default {
    props:{
        
    }
}
</script>