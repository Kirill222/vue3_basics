const app = Vue.createApp({ 
    //shorthand for functions inside of objects   
    data() {                        
        return {
            showBooks: true,
            title: 'The Game of Thrones',
            author: 'John Connor',
            age: 99,
        }
    },
    //any functions of the component we place here
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    },
})

app.mount('#app')