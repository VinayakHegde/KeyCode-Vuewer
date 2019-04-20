<template>
    <div class="app-content card" v-bind:class="{'nothing-registerd': !data.isReady}">
        <h2 v-bind:class="{'card-header': data.isReady}">{{data.caption}}</h2>
        <Codecanvas v-bind:code="data.keyCode"/>
        <div v-if="data.isReady" class="app-content-event-details">
            <Card caption="event.key" v-bind:data="data.key"/>
            <Card caption="event.code" v-bind:data="data.code"/>
            <Card caption="event.location" v-bind:data="data.location"/>
        </div>
    </div>
</template>

<script>
import KeyDown from '../shared/KeyDown';
import Codecanvas from './CodeCanvas.vue';
import Card from './Card.vue';

const defaults = {
    keyCode : 0,
    key: '',
    code : '',
    location : '',
    isReady : false,
    caption : 'Press any key in you keyboard'
};

export default {
    name : 'Main',
    components:{
        Codecanvas,
        Card
    },
    data(){
        return {
            data : defaults
        };
    },
    created (){
        const body = document.querySelector('body');

        body.onkeydown = (evt) => {
            if (!evt.metaKey) {
                evt.preventDefault();
                this.data = defaults;
            }

            this.data = new KeyDown(evt);
        }
    }
}
</script>

<style>
.app-content{
    flex:1;
    overflow-x: hidden;
    overflow-y: auto;
}

.app-content.nothing-registerd{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>


