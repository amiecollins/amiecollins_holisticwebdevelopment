import projectview from './components/projectview.js'

export default {
    data: function () {
        return {
            show: false
        }
    },
    
    methods: {
        
    },

    props: [
        project
    ],

    components: function () {
        projectview
    },

    template: `
        <div class="project-small" :style="'background-image:url(' + project.logo + ')'">
            <h3 v-text="project.name"></h3>
            <p v-text="project.description"></p>
            <div>
                <div class="filters"><span v-for="filter in project.filters"><a class="project-filter" v-text="filter"></a></span></div>
                <img class="project-select" src="/public/media/icons/more.svg" alt="See More" @click="show = true">
            </div>
            <div v-if="show"><section class="view"><projectview project="project"></projectview><div @click="show = false">< Go Back</div></section></div>
        </div>`
}