const app = Vue.createApp({ 
    //shorthand for functions inside of objects   
    data() {                        
        return {
            title: 'The Game of Thrones',
            author: 'John Connor',
            age: 99,
        }
    }
})

app.mount('#app')