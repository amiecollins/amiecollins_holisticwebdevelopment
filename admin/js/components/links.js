export default {
    data: function () {
        return {
            
        }
    },
    
    methods: {
        
    },

    props: [
        'links'
    ],

    template: `<ul><li v-for="link in links"><a :href="link.a"><img :src="link.src" :alt="link.alt"></a></li></ul>`
}