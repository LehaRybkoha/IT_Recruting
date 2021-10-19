<template>
    <div class="wrapper">
        <Home/>
    </div>
</template>

<script>
    import Home from '@/views/Home.vue'

    export default {
        components: {
            Home
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Impact, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    body {
        margin: 0;
        overflow-x: hidden;
    }
    p {
        margin: 0;
    }
    a {
        text-decoration: none;
    }
</style>
