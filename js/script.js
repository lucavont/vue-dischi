const myAlbums = [];

const myApp = new Vue({
    el: '#root',
    data: {
        albums: [...myAlbums]
    },
    method: {},
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(r => {
                myAlbums.push(r.data.response);
            })
    }
})