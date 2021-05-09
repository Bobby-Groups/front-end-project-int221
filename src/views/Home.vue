<template>
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <div class="mx-60 my-10 flex flex-col min-h-screen">  
     <div class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xxl:col-span-12">
                    <div class="w-full" id="underline">
                        <h1 class="text-7xl sm:text-8xl lg:text-8xl xl:text-9xl text-gray-500 font-bold my-8 animate__animated animate__backInDown">House<br>
                            paint<span class="text-blue-400">to</span></h1>
                        <p class="text-xl text-gray-400 font-semibold animate__animated animate__backInUp">House colors helper<br> for your own house</p>
                    </div>
                </div>
    <div>

    </div>

    <div class="my-20 text-gray-400 text-2xl animate__animated animate__backInUp">
    <p>This web helps you select house colors and provide you with the type of color to suit your needs.</p>

    </div>

    <div class="my-10">
    <router-link to="color"  class="p-5 border-4 bg-gray-600 text-white rounded-xl">Choose your best Color here</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style>
#underline{
  padding-bottom: 5rem;
  border-bottom: 1px black solid;
}
</style>