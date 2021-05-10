<template>
  <div class="flex flex-col ml-10">
    <div class="flex flex-col" id="crop">
         <div class="flex justify-start mb-5" >
        <p class="font-bold">Change Image</p>
      </div>
      <div class="flex justify-start">
      <Upload />

      </div>
    </div>
    <div class="flex flex-col" id="crop">

      <div class="lg:flex lg:flex-row sm:flex sm:justify-start mb-5" >
        <p class="font-bold">Change Color</p>
      </div>

      <div>
        <ChangeColor />
      </div>

    </div>
    <div class="flex flex-col" id="crop">
         <div class="flex justify-start mb-5">
      <p class="font-bold">Add new Color</p>
      </div>
      <div>
      <AddColor />
      </div>
    </div>
  </div>
</template>

<script>
import Upload from "@/components/bases/baseUploadImg.vue";
import ChangeColor from "@/components/bases/baseChangeColor.vue";
import AddColor from "@/components/bases/baseAddColor.vue";

export default {
  components: {
    Upload,
    ChangeColor,
    AddColor,
  },
};
</script>

<style>
    #crop{
        margin-top: 3rem;
        padding-bottom: 1rem;
        padding-left: 1rem;
        border-bottom: 4px dotted black;
    }
</style>
