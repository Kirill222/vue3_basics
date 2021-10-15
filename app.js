const app = Vue.createApp({ 
    //shorthand for functions inside of objects   
    data() {                        
        return {
            showBooks: true,
            title: 'The Game of Thrones',
            author: 'John Connor',
            age: 99,
            layerX: 0,
            layerY: 0,
            offsetX: 0,
            offsetY: 0,
        }
    },
    //any functions of the component we place here
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if(data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            console.log(e)
            this.layerX = e.layerX
            this.layerY = e.layerY
            this.offsetX = e.offsetX
            this.offsetY = e.offsetY
        }
    },
})

app.mount('#app')