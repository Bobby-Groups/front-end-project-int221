<template>
  <div class="flex flex-row min-h-screen min-w-screen overflow-x-hidden ml-12 md:ml-10 sm:ml-1">
    <div class="lg:grid lg:grid-cols-3 lg:gap-4 md:grid md:grid-cols-2 md:gap-3 sm:grid sm:grid-cols-2 sm:gap-0">
  <div v-for="product of userProducts" :key="product.id" class="">
    <div class="flex flex-col m-3">
      <div
        class="flex flex-col bg-white px-8 py-6 rounded-xl space-y-5 items-center"
      >
        <img
          class="lg:w-48 lg:h-48 md:w-40 md:h-36 sm:w-32 sm:h-28 rounded-md border-gray-400 border-2"
          :src="`${`http://23.98.77.87/backend/brandimg/`}`+product.brand.id"
          alt="motivation"
        />
        <div class="text-left sm:text-sm">
          <div class="flex flex-row text-left">
            <p class="leading-relaxed mt-2">
              Color: {{ product.color.colorName }}
            </p>
            <div
              :style="{ backgroundColor: product.color.colorcode }"
              class="p-4 ml-5 border-black border-2"
            ></div>
          </div>
          <!-- <div v-for="p of price" :key="p"> -->
          <p>Brand: {{ product.brand.brandName }}</p>
          <p>Type: {{ product.type_name }}</p>

          <p>Price: {{ product.type_price }} bath</p>  
          <p>Date: {{ product.date }}</p>
        </div>
        <Button msg="delete" @click="deleteProduct(product.id)"></Button>
        <!-- </div> -->
        <!-- <div :style="{ backgroundColor: brand.color.colorcode }" class="p-10"></div> -->
      </div>
    </div>
  </div>
  </div>
  </div>
  <footer class="bg-indigo-600 text-black text-2xl p-8 w-screen flex justify-center">
    <div class="flex flex-row">
    <div>
      Total: {{totalPrice}} 
    </div>
    <div class="mx-5">
      <router-link to="color" msg="Buy More" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy More</router-link>
    </div>
    </div>
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
    deleteProduct(id){
      this.deleteData('product',id)
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