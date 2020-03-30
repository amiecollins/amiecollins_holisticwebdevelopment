import projectsample from './projectsample.js'
import projects from '../data/projects.js'

export default {
    data: function () {
        return {
            query: "#featured",
            icon: "",
            results: [

            ],
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
            query = this.break(query);
            var check = [ "filters", "name", "description" ];
            for (project in results) {
                score = 0;
                for (query in query) {
                    for (filter in project.filters) {
                        if (query.includes(filter)) {
                            score++;
                        }
                    }
                    if (project.description.includes(query)) {
                        score++;
                    }
                    if (project.name.includes(query)) {
                        score++;
                    }
                }
                project.relavance = score;
            }
            this.results = results.sort(function (a,b) {
                return b[key] - a[key];
            });
        },
        break: function (item) {
            item = item.replace(/[^a-zA-Z0-9]/g, "");
            item = item.toLowerCase();
            item = item.split(" ");
            return item;
        }
    },

    components: {
        projectsample
    },

    template: `
        <section class="projects">
            <div class="projects-nav">
                <h2>Browse Projects</h2>
                <div class="search">
                    <div class="search-bar"><img :src="icon" alt="search icon" @click="search"><input type="text" v-model="query" @change="search"><img :src="filters.img" alt="Add Filters" @click="filters.show = true"></div>
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