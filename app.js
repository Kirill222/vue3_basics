const app = Vue.createApp({ 
    //shorthand for functions inside of objects   
    data() {                        
        return {
            url: "https://google.com",
            showBooks: true,
            books: [                
                {title: "ttt", author: "ttt", img: "./assets/1.jpg", isFavorite: true,},
                {title: "bbb", author: "bbb", img: "./assets/2.jpg", isFavorite: false,}, 
                {title: "ccc", author: "ccc", img: "./assets/3.jpg", isFavorite: true,},
            ]
        }
    },
    //any functions of the component we place here
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFavClass(e, book) {                             
            book.isFavorite = !book.isFavorite
        }      
    },
    //computed properties
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFavorite)
        }
    }

})

app.mount('#app')