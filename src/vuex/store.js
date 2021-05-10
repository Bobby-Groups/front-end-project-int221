import Vuex from 'vuex'



export default new Vuex.Store({
    state: {
        products:[],
        product: {
        color:{},
        brand:{
            types:{
                
            }
        },
        images:"TOA_Acrylic.jpg",
        date:"",
        type_id:0
        },
        typeId:0,
        img: ""
    },
    mutations: {
        UPDATE_PRODUCT_COLOR (state, payload) {
            state.product.color = payload
          },
          UPDATE_TYPEID(state,value){
            state.product.type_id = value
           },
           UPDATE_IMAGE(state,payload){
            state.product.images = payload
        },
          UPDATE_PRODUCT_BRAND_TYPE (state, payload) {
            state.product.brand = payload

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            state.product.date = today
            state.product.type_id = state.typeId
          },
          SET_PRODUCT(state){
           state.products.push(state.product)
           
        },
        
     
    },
    actions:{
        addColor(context,value){
            context.commit('UPDATE_PRODUCT_COLOR',value)
        },
        addBrandType(context,value){
            context.commit('UPDATE_PRODUCT_BRAND_TYPE',value)
        },
        addProduct(context){
            context.commit('SET_PRODUCT')
        },
        addTypeId(context,value){
            context.commit('UPDATE_TYPEID',value)
        },
        addImage(context,value){
            context.commit('UPDATE_IMAGE',value)
        }

    },
    
    
  })
