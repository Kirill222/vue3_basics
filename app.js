const app = Vue.createApp({ 
    //shorthand for functions inside of objects   
    data() {                        
        return {
            showBooks: true,
            books: [                
                {title: "ttt", author: "ttt"},
                {title: "bbb", author: "bbb"},
                {title: "ccc", author: "ccc"},
            ]
        }
    },
    //any functions of the component we place here
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },       
    },
})

app.mount('#app')