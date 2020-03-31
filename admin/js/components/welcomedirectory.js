import links from './links.js'

export default {
    data: function () {
        return {
            logo: "./media/images/name-black.png",
            homelinks: [
                {
                    a: "https://www.facebook.com/amiecollinsdevelopment/",
                    src: "./media/icons/facebook.svg",
                    alt: "Like my Facebook Page"
                },
                {
                    a: "https://github.com/amiecollins",
                    src: "./media/icons/github.svg",
                    alt: "Check out my GitHub"
                },
                {
                    a: "https://twitter.com/AmieCollinsLdn",
                    src: "./media/icons/twitter.svg",
                    alt: "Follow me on Twitter"
                },
                {
                    a: "https://www.instagram.com/holistic_web_dev/",
                    src: "./media/icons/instagram.svg",
                    alt: "Follow me on Instagram"
                },
                {
                    a: "https://www.linkedin.com/in/amie-collins/",
                    src: "./media/icons/linkedin.svg",
                    alt: "Check out my LinkedIn"
                },
                {
                    a: "https://drive.google.com/open?id=1NkSl0ObjDRJTHLvBGoMycSBtClt3BD7d",
                    src: "./media/icons/resume.svg",
                    alt: "View my Resume"
                },
                {
                    a: "https://drive.google.com/open?id=1GP-t_8dFTdWO3tbo8w-EFMJO-9GkXdt3",
                    src: "./media/icons/my-story.svg",
                    alt: "Learn more About Me"
                }
            ]
        }
    },
    
    methods: {
        
    },

    components: {
        links
    },

    template: `
    <section class="about">
        <h2>Welcome to the Portfolio of <img class="about-logo" :src="logo" alt="Amie Collins" ></h2>
        <p>Hi there! My name is Amie Collins! I am currently a student of <a href="https://www.fanshawec.ca/programs/idp3-interactive-media-design/next">Interactive Media Design</a> at Fanshawe College with full stack and graphic design skills. I am the <i>Holistic Web Developer</i>, able to take all aspects of a project together to create something cohesive, recognizable and effective for both your project as well as your consumers. Currently I am available for small freelancing projects. You can contact me at <a href="emailto:contact@amiecollins.ca">contact@amiecollins.ca</a> or my <a href="https://www.facebook.com/amiecollinsdevelopment/">Facebook page</a>.</p>
        <links :links="homelinks"></links>
    </section>`
}