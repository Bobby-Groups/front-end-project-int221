// import Vue from 'vue'
import Vuex from 'vuex'


// Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products:[],
        colorcode:""
    },
    mutations: {
        UPDATE_PRODUCT (state, payload) {
            state.products.push(payload);
          }
    },
    actions:{
        addProduct(context,value){
            context.commit('UPDATE_PRODUCT',value)
        }
    },
    getters: {
        getColor: state => state.colorcode
    }
    
  })
