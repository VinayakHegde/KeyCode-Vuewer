<template>
    <div class="app-content">
        <Toolbar @keysTable="toggleKeysTable($event)"/>
        <div v-show="!isTableOpen" class="app-key-details card" v-bind:class="{'nothing-registerd': !data.isReady}">
            <h2 v-bind:class="{'card-header': data.isReady}">{{data.caption}}</h2>
            <code-canvas v-bind:code="data.keyCode"/>
            <div v-if="data.isReady" class="app-content-event-details">
                <Card caption="event.key" v-bind:data="data.key"/>
                <Card caption="event.code" v-bind:data="data.code"/>
                <Card caption="event.location" v-bind:data="data.location"/>
            </div>
        </div>
        <div v-show="isTableOpen" class="app-key-details keys-table card">
            <code-table/>
        </div>
    </div>
</template>

<script>
import KeyDown from '../shared/KeyDown';
import Toolbar from './Toolbar.vue';
import CodeCanvas from './CodeCanvas.vue';
import Card from './Card.vue';
import CodeTable from './CodeTable.vue';

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
        Toolbar,
        CodeCanvas,
        Card,
        CodeTable
    },
    data(){
        return {
            isTableOpen : false,
            data : defaults
        };
    },
    methods:{
        toggleKeysTable(flag){
            this.isTableOpen = flag;
        }
    },
    created (){
        const body = document.querySelector('body');
        body.onkeydown = (evt) => {
            if (!evt.metaKey) {
                evt.preventDefault();
            }
            if(this.isTableOpen) return;

            this.data = new KeyDown(evt);
        }
    }
}
</script>

<style>
.app-content{
    flex:1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.app-key-details.nothing-registerd{
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.app-key-details.card{
    overflow: hidden;
    border: 0;
    display: flex;
    flex: 1;
    flex-direction: column;
}
.app-content-event-details{
    flex: 1;
    overflow: auto;
}
</style>


