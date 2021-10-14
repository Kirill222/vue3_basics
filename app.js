const app = Vue.createApp({ 
    //shorthand for functions inside of objects   
    data() {                        
        return {
            title: 'The Game of Thrones',
            author: 'John Connor',
            age: 99,
        }
    },
    //any functions of the component we place here
    methods: {
        changeTitle(title) {
            this.title = title
        }
    },
})

app.mount('#app')