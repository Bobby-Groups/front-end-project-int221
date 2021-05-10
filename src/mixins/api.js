export default {
    data() {
        return {
            API_URL: 'http://23.98.77.87/backend',

        }
    },
    methods: {
        async getData(api) {
            try {
                return await this.axios.get(`${this.API_URL}/${api}`)
            } catch (e) {
                console.error(e);
            }
        },
        async postData(api, data) {
            try {
                return await this.axios.post(`${this.API_URL}/${api}`, data)
            } catch (e) {
                
                console.log(e);
            }
        },
        async deleteData(api,data){
            try{
                return await this.axios.delete(`${this.API_URL}/${api}/`+data)
            } catch(e){
                console.log(e);
            }
        },
        async putData(api,id,data){
            try{
                return await this.axios.put(`${this.API_URL}/${api}/`+id,data)
            }catch(e){
                console.log(e);
            }
        } 
    }
}

