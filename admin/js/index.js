import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import welcomepage from './components/welcomepage.js'
import headermenu from './components/menu.js'
import projects from './components/projects.js'

const vueIndex = (() => {

    let vm = new Vue({

        data: {

        },

        methods: {

        },

        components: {
            welcomepage, projects, headermenu
        }

    }).$mount("#index");

})();