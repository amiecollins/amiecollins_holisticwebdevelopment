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
        <section class="project-view">
            <div class="project-info">
                <img class="project-logo" :src="project.logo" :alt="'Logo for ' + project.name">
                <div class="project-data"><h1 class="project-title" v-text="project.name"></h1>
                <span class="project-date" v-text="'Updated ' + project.date"></span>
                <p v-text="project.description"></p>
                <links :links="project.links"></links></div>
            </div> 
            <section class="project-content-container"><h2 class="hidden">Learn More...</h2>
                <div class="project-content" v-for="content in project.contents">
                    <img class="project-image" :src="content.img" :alt="content.alt">
                    <div class="content-text">
                        <h3 v-text="content.title"></h3>
                        <p v-text="content.description"></p>
                    </div>
                </div>
            </section>
        </section>`
}