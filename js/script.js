const myApp = new Vue({
    el: '#root',
    data: {
        albums: []
    },
    method: {},
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(r => {
                this.albums = r.data.response;
            })
    }
})