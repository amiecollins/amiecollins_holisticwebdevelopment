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
            var resultcheck = projects;
            query = this.break(query);
            var check = [ "filters", "name", "description" ];
            for (var i = 0; i < resultcheck.length; i++) {
                resultcheck[i].relavance = 0;
                var score = 0;
                console.log(resultcheck[i]);
                for (var x = 0; x < query.length; x++) {
                    console.log(query[x]);
                    if (resultcheck[i].filters.includes(query[x])) {
                        score++;
                    }
                    if (resultcheck[i].description === query[x]) {
                        score++;
                    }
                    if (resultcheck[i].name === query[x]) {
                        score++;
                    }
                }
                console.log(score);
                resultcheck[i].relavance = score;
            }
            this.results = resultcheck.sort(function (a,b) {
                return b["relavance"] - a["relavance"];
            });
        },
        break: function (item) {
            item = item.replace(/[^a-zA-Z0-9]/g, " ");
            item = item.toLowerCase();
            item = item.split(" ");
            item = item.filter(v=>v!='');
            console.log(item);
            return item;
        },
        addfilter: function (filter) {
            if (this.query.includes(filter)) {
               this.query = this.query.replace(filter, "");
            } else {
                this.query = this.query + ' ' + filter;
                this.search();
            }
        }
    },

    created: function () {
        this.search();
    },

    components: {
        projectsample
    },

    template: `
        <section class="projects">
                <div class="search">
                    <div class="search-bar">
                        <h2>Browse Projects</h2><img :src="icon" alt="search icon" @click="search"><input type="text" v-model="query" @change="search"></div>
                        <div class="filters"><span class="filter-tag">filters:</span><a class="filter" v-for="filter in filters.filters"><span v-text="filter" @click="addfilter(filter)"></span></a></div>
                </div>
                <div class="results">
                    <div v-for="result in results">
                        <projectsample v-on:addfilter="addfilter" :project="result"></projectsample>
                    </div>
                </div>
        </section>`
}