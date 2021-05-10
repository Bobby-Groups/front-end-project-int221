<template>
<div class="flex flex-col">
  <div class="flex flex-col ml-20">
  <Color v-if="activeComponent === 'Color'" />
  <div class="">
    <Button
    class=""
    msg="Confirm"
    v-if="activeComponent === 'Color'"
    @click="activeComponent = 'Brand'"
      >CONFIRM</Button
    >
    </div>
</div>
  <Brand v-if="activeComponent === 'Brand'" />

</div>



</template>
<script>
  import Color from '@/components/bases/baseColor.vue'
  import Brand from '@/components/bases/baseBrand.vue'
import Button from '../components/core/Button.vue'


export default {

  components:{
    Color,
    Brand,
    Button
  },
  data(){
    return{
      activeComponent: 'Color'
    }
  }
}

</script>