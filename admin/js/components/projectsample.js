import projectview from './projectview.js'

export default {
    data: function () {
        return {
            show: false
        }
    },
    
    methods: {
        
    },

    props: [
        'project'
    ],

    components: {
        projectview
    },

    template: `<section class="result-container"><div class="result-bg" :style="'background-image:url(' + project.logo + ');'"></div>
        <div class="result"> 
            <h3 v-text="project.name"></h3>
            <p v-text="project.description"></p>
            <div>
                <div class="filters"><span v-for="filter in project.filters"><a v-on:click="$emit(addFilter, filter)" class="project-filter" v-text="'#' + filter"></a></span></div>
                <img class="project-select" src="/public/media/icons/more.svg" alt="See More" @click="show = true">
            </div>
            <div v-if="show"><section class="view"><projectview :project="project"></projectview><div @click="show = false">< Go Back</div></section></div>
        </div></section>`
}