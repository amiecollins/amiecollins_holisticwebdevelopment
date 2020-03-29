import links from './components/links.js'

export default {
    data: function () {
        return {
            homelinks: [
                {
                    a: "https://www.facebook.com/amiecollinsdevelopment/",
                    src: "",
                    alt: "Like my Facebook Page"
                },
                {
                    a: "https://github.com/amiecollins",
                    src: "",
                    alt: "Check out my GitHub"
                },
                {
                    a: "https://twitter.com/AmieCollinsLdn",
                    src: "",
                    alt: "Follow me on Twitter"
                },
                {
                    a: "https://www.instagram.com/holistic_web_dev/",
                    src: "",
                    alt: "Follow me on Instagram"
                },
                {
                    a: "https://drive.google.com/open?id=1NkSl0ObjDRJTHLvBGoMycSBtClt3BD7d",
                    src: "",
                    alt: "View my Resume"
                },
                {
                    a: "https://drive.google.com/open?id=1GP-t_8dFTdWO3tbo8w-EFMJO-9GkXdt3",
                    src: "",
                    alt: "Learn more About Me"
                }
            ]
        }
    },
    
    methods: {
        
    },

    components: function () {
        links
    },

    template: `
    <section class="about">
        <h2>Welcome to the Portfolio of Amie Collins</h2>
        <p>Hi there! My name is Amie Collins! I am currently a student of <a href="https://www.fanshawec.ca/programs/idp3-interactive-media-design/next">Interactive Media Design</a> at Fanshawe College with full stack and graphic design skills. I am the <i>Holistic Web Developer</i>, able to take all aspects of a project together to create something cohesive, recognizable and effective for both your project as well as your consumers. Currently I am available for small freelancing projects. You can contact me at <a href="emailto:contact@amiecollins.ca">contact@amiecollins.ca</a> or my <a href="https://www.facebook.com/amiecollinsdevelopment/">Facebook page</a>.</p>
        <links links="homelinks"></links>
    </section>`
}