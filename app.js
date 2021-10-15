const app = Vue.createApp({ 
    //shorthand for functions inside of objects   
    data() {                        
        return {
            url: "https://google.com",
            showBooks: true,
            books: [                
                {title: "ttt", author: "ttt", img: "./assets/1.jpg"},
                {title: "bbb", author: "bbb", img: "./assets/2.jpg"},
                {title: "ccc", author: "ccc", img: "./assets/3.jpg"},
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