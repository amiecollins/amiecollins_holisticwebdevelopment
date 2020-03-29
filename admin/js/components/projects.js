import projectsample from './components/projectsample.js'
import projects from '../data/projects.js'

export default {
    data: function () {
        return {
            query: "#featured",
            icon: "",
            filters: {
                show: false,
                filters: [
                    "#featured", "#frontend", "#backend", "#fullstack", "#graphicdesign"
                ]
            }
        }
    },
    
    methods: {
        search: function () {
            query = this.query;
            results = projects;
            
        }
    },

    components: function () {
        projectsample
    },

    template: `
        <section class="projects">
            <div class="projects-nav">
                <h2>Browse Projects</h2>
                <div class="search">
                    <div class="search-bar"><img :src="icon" alt="search icon" @click="search"><input type="text" v-model="query"><img :src="filters.img" alt="Add Filters" @click="filters.show = true"></div>
                    <div v-show="filters.show" class="filters"><a class="filter" v-for="filter in filters.filters"><span v-text="filter" @click="query = query + ' ' + filter"></span></a></div>
                </div>
                <div class="results">
                    <div v-for="result in search.results">
                        <projectsample project="result"></projectsample>
                    </div>
                </div>
            </div>
        </section>`
}