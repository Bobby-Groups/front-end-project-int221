

export default {
    data() {
        return {
            API_URL: 'http://23.98.77.87:5000'
        }
    },
    methods: {
        async getJSON(api) {
            const config = { headers: { accept: 'application/json' } }
            try {
                return await this.axios.get(api, config)
            } catch (e) {
                console.error(e)
            }
        },
        async getData(api){
            try{
                return await this.axios.get(`${this.API_URL}/${api}`)
            }catch(e){
                console.error(e);
            }
        }
        }
    }

