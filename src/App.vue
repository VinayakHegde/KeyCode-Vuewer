<template>
    <div id="app">
        <Header/>
        <Main/>
        <Footer/>
    </div>
</template>

<script>
import Header from './components/Header.vue';
// import Content from './components/Content.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
    name : 'app',
    components:{
        Header,
        Main,
        Footer
    }
}
</script>

<style>
#app{
    text-align: center;
    color: #2c3e50;
    display:flex;
    flex:1;
    flex-direction: column;
}
</style>


