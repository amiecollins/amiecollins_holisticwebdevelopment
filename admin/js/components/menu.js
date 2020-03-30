export default {
    data: function () {
        return {
            logo: {
                top: "",
                bot: ""
            },
            menu: false,
            menulinks: [
                {
                    a: "www.amiecollins.ca",
                    name: "Home"
                },
                {
                    a: "www.digitalwitch.ca",
                    name: "Digital Witch Designs"
                },
                {
                    a: "https://www.facebook.com/amiecollinsdevelopment/",
                    name: "Facebook"
                },
                {
                    a: "https://twitter.com/AmieCollinsLdn",
                    name: "Twitter"
                },
                {
                    a: "https://www.instagram.com/holistic_web_dev/",
                    name: "Instagram"
                },
                {
                    a: "https://github.com/amiecollins",
                    name: "GitHub"
                },
                {
                    a: "https://drive.google.com/open?id=1NkSl0ObjDRJTHLvBGoMycSBtClt3BD7d",
                    name: "Resume"
                },
                {
                    a: "https://drive.google.com/open?id=1GP-t_8dFTdWO3tbo8w-EFMJO-9GkXdt3",
                    name: "About Me"
                }
            ]
        }
    },
    
    methods: {
        
    },

    template: `
        <header>
            <h2 class="hidden">Main Navigation</h2>
            <div class="trees"><img :src="logo.top" alt="Amie Collins"><div class="menu-button" @click="menu = true">menu</div></div>
            <div class="bottom"><img :src="logo.bot" alt="Holistic Web Developer"></div>
            <section v-if="menu">
                <nav>
                    <h3 class="hidden">Collapseable Menu</h3>
                    <ul class="menu-links">
                        <li v-for="link in menulinks"><a :href="link.a" v-text="link.name"></a></li>
                        <li @click="menu = false">Exit Menu</li>
                    </ul>
                </nav>
            </section>
        </header>`
}