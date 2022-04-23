const App = {
    data(){
        return{
            data: "",
            text: "",
            isSubmit: false
        }
    },
    methods: {
        submit(){
            const replaced = this.data.replaceAll(" ", "")
            this.text = replaced
            this.isSubmit = true
            this.data = ""
        },
        clear(){
            this.isSubmit = false
        }
    },
}

Vue.createApp(App).mount("#app")