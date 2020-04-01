import directory from './welcomedirectory.js'
import links from './links.js'

export default {
    data: function () {
        return {
            background: "./media/video/air.mp4",
            logo: "./media/icons/logo-full.svg",
            dw: {
                logo: "./media/icons/dw-color.svg",
                links: [
                    {
                        a: "www.digitalwitch.ca",
                        src: "./media/icons/dw-square.svg",
                        alt: "Visit the Digital Witch Homepage"
                    },
                    {
                        a: "https://www.facebook.com/digitalwitchdesigns/",
                        src: "./media/icons/facebook.svg",
                        alt: "Like Digial Witch on Facebook"
                    },
                    {
                        a: "https://twitter.com/digitalwitchdes",
                        src: "./media/icons/twitter.svg",
                        alt: "Follow Digital Witch on Twitter"
                    },
                    {
                        a: "https://www.instagram.com/digitalwitchdesigns/",
                        src: "./media/icons/instagram.svg",
                        alt: "Follow Digital Witch on Instagram"
                    }
                ]
            } 
        }
    },
    
    methods: {
        
    },

    components: {
        directory, links
    },

    template: `
    
        <section class="home"><video :src="background" alt="background forest" class="parallax homebg" autoplay muted loop></video>
            <h1 class="hidden">Welcome to the Portfolio of Amie Collins.</h1>
            <div class="logo-main"><img :src="logo" alt="Amie Collins holistic web developer"></div>
            <div class="home-content"><nav class="digital-witch">
                <a href="www.digitalwitch.ca"><div class="dw-top">
                    <img :src="dw.logo" alt="logo for Digital Witch Designs">
                    <div>
                        <h2>Looking for Digital Witch?</h2>
                        <h3>Witch, Pagan & Spiritual Designs</h3>
                    </div>
                </div></a>
                <links :links="dw.links"></links>
            </nav>
            
            <directory></directory></div>
        </section>
    `
}