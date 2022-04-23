var App = {
    data(){
        return{
            username: '',
            email: '',
            checkedTeachers: [],
            checkedClasses: [],
            checkedGraduation: '',
            classes: ["Math", "English", "Science", "History", "Art", "Music", "PE", "Health"],
            teachers: ["Radka", "Petr", "Jitka", "Dan", "Láďa", "Monika", "Ghes", "Eileen"],
            isSubmited: false,
            user:[]
        }
    },
    methods:{
        submit(){
            this.isSubmited = true
            this.user = {
                "username": this.username,
                "email": this.email,
                "year": this.checkedYear,
                "classes": this.checkedClasses,
                "graduation": this.checkedGraduation
            }
        },
        clear(){
            this.isSubmited = false
            this.username = ''
            this.email = ''
            this.year = 0
            this.checkedClasses = []
            this.checkedGraduation = []
        }
    }
}
Vue.createApp(App).mount('#app')