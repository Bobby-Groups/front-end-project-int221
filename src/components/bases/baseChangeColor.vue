<template>
  <form
    @submit.prevent="
      checkForm();
      putColor(colors[colorId - 1], newName, colorId, colorCode);
    "
    class="lg:flex lg:flex-col md:flex md:flex-col sm:flex sm:flex-col"
  >
    <div
      class="lg:flex md:flex-row md:flex lg:flex-row sm:flex sm:justify-start sm:mb-3"
    >
      <label for="newName" class="mx-2 sm:flex sm:justify-start sm:mr-11"
        >Color:
      </label>

      <select
        name="selectColor"
        v-model="colorId"
        @change="selectColor($event)"
      >
        <option disabled>Please select one</option>
        <option
          :value="color.id"
          v-for="color of colors"
          :key="color.id"
          :style="{ backgroundColor: color.colorcode }"
          class="text-white"
        >
          {{ color.colorName }}
        </option>
      </select>
    </div>
    <div class="md:flex md:flex-col">
      <div class="sm:flex sm:justify-start">
        <label for="newName" class="mx-2">New name:</label>
        <input type="text" v-model="newName" name="newName" />
      </div>
      <div class="sm:flex sm:justify-start sm:mt-3">
        <label class="mx-2">Color code:</label>
        <input type="text" v-model="colorCode" name="colorCode" />
      </div>
    </div>

    <div class="mx-1 sm:flex sm:justify-start sm:ml-60 sm:mt-5">
      <input type="submit" value="Submit" />
    </div>
    <div class="flex flex-col mx-5 text-left">
      <span v-if="errors.length">
        <ul>
          <li
            v-for="error in errors"
            :key="error"
            class="font-bold text-red-600"
          >
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
      colors: [],
      colorId: null,
      newName: null,
      colorCode: null,
      errors: [],
      isNewName: false,
      isColorId: false,
      isColorCode: false,
    };
  },
  async created() {
    this.colors = await this.fetchColor();
  },
  methods: {
    async fetchColor() {
      const { data } = await this.getData("color");
      return data;
    },
    selectColor(event) {
      console.log(event.target.value);
      return (this.colorId = event.target.value);
    },
    async putColor(color, newName, id, code) {
      if (
        this.isNewName === true &&
        this.isColorId === true &&
        this.isColorCode === true
      ) {
        let newColor = {
          colorName: newName,
          id: parseInt(id),
          colorcode: code,
        };
        color = newColor;

        await this.putData("color", id, color);
      }
    },

    checkForm: function (e) {
      this.errors = [];
      if (this.newName) {
        this.isNewName = true;
        if (this.colorId) {
          this.isColorId = true;
        }
        if (this.colorCode) {
          this.isColorCode = true;
        }
        if (!this.colorId) {
          this.errors.push("Please select color.");
        }
        if (!this.colorCode) {
          this.errors.push("Color Code required");
        }
        return true;
      }
      if (this.colorId) {
        this.isColorId = true;
        if (this.newName) {
          this.isNewName = true;
        }
        if (this.colorCode) {
          this.isColorCode = true;
        }
        if (!this.newName) {
          this.errors.push("Name required.");
        }
        if (!this.colorCode) {
          this.errors.push("Color Code required");
        }
        return true;
      }

      if (this.colorCode) {
        this.isColorCode = true;
        if (this.newName) {
          this.isNewName = true;
        }
        if (this.colorId) {
          this.isColorId = true;
        }
        if (!this.newName) {
          this.errors.push("Name required.");
        }
        if (!this.colorId) {
          this.errors.push("Please select color.");
        }
        return true;
      }
      this.errors = [];

      if (!this.newName) {
        this.errors.push("Name required.");
      }
      if (!this.colorId) {
        this.errors.push("Please select color.");
      }
      if (!this.colorCode) {
        this.errors.push("Color Code required");
      }
      e.preventDefault();
    },
  },
};
</script>