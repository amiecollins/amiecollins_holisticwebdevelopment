import projectsample from './projectsample.js'
import projects from '../data/projects.js'

export default {
    data: function () {
        return {
            query: "#featured",
            icon: "./media/icons/search.svg",
            results: [

            ],
            filters: {
                img: "./media/icons/add.svg",
                filters: [
                    "#featured", "#frontend", "#backend", "#fullstack", "#graphicdesign"
                ]
            }
        }
    },
    
    methods: {
        search: function () {
            var query = this.query;
            var results = projects;
            query = this.break(query);
            var check = [ "filters", "name", "description" ];
            for (var project in results) {
                var score = 0;
                console.log(project);
                for (var activequery in query) {
                    for (filter in project.filters) {
                        if (activequery.includes(filter)) {
                            score++;
                        }
                    }
                    if (project.description.includes(activequery)) {
                        score++;
                    }
                    if (project.name.includes(activequery)) {
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
                <div class="search">
                    <div class="search-bar">
                        <h2>Browse Projects</h2><img :src="icon" alt="search icon" @click="search"><input type="text" v-model="query" @change="search"></div>
                        <div class="filters"><span class="filter-tag">filters:</span><a class="filter" v-for="filter in filters.filters"><span v-text="filter" @click="query = query + ' ' + filter"></span></a></div>
                </div>
                <div class="results">
                    <div v-for="result in search.results">
                        <projectsample project="result"></projectsample>
                    </div>
                </div>
        </section>`
}