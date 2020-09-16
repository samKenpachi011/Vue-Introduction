// tab components
Vue.component("tab-email", {
    template: "<h4>email tab</h4>"
});
Vue.component("tab-twitter", {
    template: "<h4>twitter tab</h4>"
});
Vue.component("tab-github", {
    template: "<h4>github tab</h4>"
});

var app = new Vue({
    el: "#profile",
    data: {
        name: "Sam Kenpachi",
        work: "Freelance Developer",
        location: "Location: Botswana-Gaborone",
        img: './img.png',
        currentTab: "Email",
        tabs: ["Email", "Twitter", "GitHub"]
    },
    computed: {
        currentTabComponent: function() {
            return "tab-" + this.currentTab.toLowerCase();
        }
    }

});