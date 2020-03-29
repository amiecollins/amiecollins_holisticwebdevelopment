import directory from './components/welcomedirectory.js'

export default {
    data: function () {
        return {
            background: "/media/video/sunrise.mp4",
            
            dw: {
                logo: "",
                links: [
                    {
                        a: "www.digitalwitch.ca",
                        src: "",
                        alt: "Visit the Digital Witch Homepage"
                    },
                    {
                        a: "https://www.facebook.com/digitalwitchdesigns/",
                        src: "",
                        alt: "Like Digial Witch on Facebook"
                    },
                    {
                        a: "https://twitter.com/digitalwitchdes",
                        src: "",
                        alt: "Follow Digital Witch on Twitter"
                    },
                    {
                        a: "https://www.instagram.com/digitalwitchdesigns/",
                        src: "",
                        alt: "Follow Digital Witch on Instagram"
                    }
                ]
            } 
        }
    },
    
    methods: {
        
    },

    components: function () {
        directory
    },

    template: `
    <video :src="background" alt="background forest" class="parallax homebg" autoplay muted>
        <section class="home">
            <h1 class="hidden">Welcome to the Portfolio of Amie Collins.</h1>
            <nav class="digital-witch">
                <a href="www.digitalwitch.ca"><div class="dw-top">
                    <img :src="dw.logo" alt="logo for Digital Witch Designs">
                    <div>
                        <h2>Looking for Digital Witch?</h2>
                        <p>Witch, Pagan & Spiritual Designs</p>
                    </div>
                </div></a>
                <links links="dw.links"></links>
            </nav>
            <div class="logo-main"><img :src="logo.url" alt="Amie Collins; holistic web developer"></div>
            <directory></directory>
        </section>
    </video>`
}