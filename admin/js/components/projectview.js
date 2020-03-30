import links from './links.js'

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
        links
    },

    template: `
        <div class="project-view">
            <div class="project-info">
                <img class="project-logo" :src="project.logo" :alt="'Logo for ' + project.name">
                <h1 class="project-title" v-text="project.name"></h1>
            </div> 
            completed <span class="project-date" v-text="project.date"></span>
            <links links="project.links"></links>
            <section class="project-content" v-for="content in project.contents">
                <img class="project-image" :src="content.img" :alt="content.alt">
                <div class="content-text">
                    <h2 v-text="content.title"></h2>
                    <p v-text="content.description"></p>
                </div>
            </section>
        </div>`
}