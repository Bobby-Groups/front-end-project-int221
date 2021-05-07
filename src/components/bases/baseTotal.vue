<template>
  <div class="flex flex-row min-h-screen">
    <div class="grid grid-cols-3 gap-4">
  <div v-for="product of userProducts" :key="product.id" class="">
    <div class="flex flex-col m-4">
      <div
        class="flex flex-col max-h-screen max-w-md bg-white px-8 py-6 rounded-xl space-y-5 items-center"
      >
        <img
          class="w-48 h-48 rounded-md border-gray-400 border-2"
          :src="`${`http://23.98.77.87/backend/brandimg/`}`+product.brand.id"
          alt="motivation"
        />
        <div class="text-left">
          <div class="flex flex-row text-left">
            <p class="leading-relaxed mt-2">
              Color: {{ product.color.colorName }}
            </p>
            <div
              :style="{ backgroundColor: product.color.colorcode }"
              class="p-5 ml-5 border-black border-2"
            ></div>
          </div>
          <!-- <div v-for="p of price" :key="p"> -->
          <p>Brand: {{ product.brand.brandName }}</p>
          <p>Type: {{ product.type_name }}</p>

          <p>Price: {{ product.type_price }} bath</p>  
          <p>Date: {{ product.date }}</p>
        </div>
        <Button msg="delete" @click="deleteProduct"></Button>
        <!-- </div> -->
        <!-- <div :style="{ backgroundColor: brand.color.colorcode }" class="p-10"></div> -->
      </div>
    </div>
  </div>
  </div>
  </div>
  <footer class="bg-indigo-600 text-black text-2xl p-8">
    Total: {{totalPrice}}
  </footer>
</template>

<script>
import Button from '@/components/core/Button.vue'
export default {
  components: {
    Button
  },
  data() {
    return {
      userProducts: [],
      currentId: [],
    
    };
  },
  async created() {
    this.userProducts = await this.fetchProduct();
   
  },
  methods: {
    async fetchProduct() {
      const { data } = await this.getData("product");
      if(data){
       data.forEach(element => {
         const type_name = element.brand.types.filter(x => x.id === element.type_id).pop().typename
         const type_price = element.brand.types.filter(x => x.id === element.type_id).pop().price

         
         element.type_name = type_name
         element.type_price = type_price
       });
       

      }
      return data;
    },
    deleteProduct(){

    }
    
  },
  computed: {
    totalPrice(){
      var total = this.userProducts.reduce(function(a,b){
        return a + b.type_price
      },0)
      return total
    }
    
  }
  

  // },
};
</script>