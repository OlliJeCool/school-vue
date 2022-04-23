const App = {
    data(){
        return {
            users: ''
        }
    },
    methods: {
        getUsers(){
            axios.get('https://reqres.in/api/users')
                .then(response => {
                    this.users = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
Vue.createApp(App).mount("#app")