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
            <h3 class="result-title" v-text="project.name"></h3>
            <span class="project-description-container" @click="show = true"><p class="project-description" v-text="project.description"></p>...</span>
            <div class="result-more">
                <div class="filters"><span class="project-filter" v-for="filter in project.filters"><a v-on:click="$emit('addfilter', '#' + filter)"  v-text="'#' + filter"></a></span></div>
                <img class="project-select" src="/public/media/icons/more.svg" alt="See More" @click="show = true">
            </div>
            <div v-if="show"><section class="view"><div class="back" v-if="show" @click="show = false">Back</div><projectview :project="project"></projectview></section></div>
        </div></section>`
}