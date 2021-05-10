<template>
  <form
    @submit.prevent="
      checkForm();
      addColor(colorName, colorCode);
    "
 class="lg:flex lg:flex-col" >
 <div class="lg:flex lg:flex-col md:flex md:flex-col">
    <div class="sm:flex sm:justify-start lg:flex lg:flex-row">
      <label class="mr-2">Color name:</label>
      <input type="text" v-model="colorName"  class="sm:mb-3 lg:mb-3"/>
    </div>
    <div class="sm:flex sm:justify-start lg:flex lg:flex-row">
      <label class="mr-3">Color code:</label>
      <input type="text" v-model="colorCode" class="lg:mb-0"/>
    </div>
    <div >
      <input type="submit" value="Submit" class="sm:flex sm:justify-start sm:mt-5 sm:ml-60 md:ml-60 lg:ml-60"/>
    </div>
</div>

<div class="mx-5 text-left">
<span v-if="errors.length">
        <ul>
          <li v-for="error in errors" :key="error" class="font-bold text-red-600">
            {{ error }}
          </li>
        </ul>
      </span>
</div>
     

    
  </form>
</template>

<script>

export default {
  data() {
    return {
      colorName: "",
      colorCode: "",
      errors: [],
      isColorName:false,
      isColorCode: false
    };
  },
  methods: {
    async addColor(name, code) {
        if(this.isColorName === true && this.isColorCode === true){
      let color = {
        colorName: name,
        colorcode: code,
      };
      console.log(color);
      await this.postData("color", color);
        }
 },
        checkForm: function (e) {
      this.errors = [];
      if (this.colorName) {
        this.isColorName = true;
        if (this.colorCode) {
          this.isColorCode = true;
        }
        if (!this.colorCode) {
          this.errors.push("Color code required.");
          
        }
        return true;
      }
      if (this.colorCode) {
        this.isColorCode = true;
        if (this.colorName) {
          this.isColorName = true;
        }
        if (!this.colorName) {
          this.errors.push("Color name required.");
        }
    
        return true;
      }
      this.errors = [];

      if (!this.colorName) {
        this.errors.push("Color code required.");
      }
      if (!this.colorCode) {
        this.errors.push("Color name required.");
      }
      e.preventDefault();
    },
  },
};
</script>