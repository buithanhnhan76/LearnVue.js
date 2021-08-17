// Vue.createApp
const app = Vue.createApp({
    // call varible with {{}}
    // use template here or put html in #app
    // template: "<h1>Hello {{name}}</h1>",
    data(){
        return {
        name: "Nhan",
        age: 20,
        picture: "https://randomuser.me/api/portraits/men/10.jpg",
    }
    },
    // define methods here
    methods:{
        async changeUser(){
            const {results} = await fetch("https://randomuser.me/api").then(res => res.json())
            this.picture = results[0].picture.large;
            // access data: this.name
        }
    }
})
// mount app
app.mount('#app');