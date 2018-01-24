Vue.component('digital-clock', {
    template: '<div class="digital-clock">{{ formattedTime }}</div>',
    data() {
        return {
            interval: null,
            time: null
        };
    },
    computed: {
        formattedTime: function () {
            return this.time.format('HH:mm:ss');
        }
    },
    methods: {
        refreshTime: function () {
            this.time = moment();
        }
    },
    created: function () {
        this.refreshTime();
        this.interval = setInterval(function () {
            this.refreshTime();
        }.bind(this), 1000);
    },
    beforeDestroy: function () {
        clearInterval(this.interval);
    }
});

new Vue({
    el: '#app'
});
