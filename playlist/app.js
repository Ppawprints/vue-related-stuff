new Vue({
    el: '#vue-app',
    data: {
        output: "your favorite food"
    }, 
    methods: {
        readRefs: function(){
            console.log(this.$refs.test.innerHTML)
            this.output = this.$refs.input
        }
    },
    computed: {
    }
});

