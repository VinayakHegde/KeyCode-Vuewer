<template>
    <div class="app-toolbar">
        <span v-if="!isTableOpen" class="icon" v-on:click="focusInput()">
            <eva-icon name="keypad-outline" animation="pulse"  fill="#fff"></eva-icon>
        </span>
        <input v-if="!isTableOpen" type="text" class="mobile-input"/>
        <span v-if="!isTableOpen" class="icon" v-on:click="openKeysTable()">
            <eva-icon name="list-outline" animation="pulse" fill="#fff"></eva-icon>
        </span>
        <span v-if="isTableOpen" class="icon close" v-on:click="closeKeysTable()">
            <eva-icon name="close-outline" animation="pulse" fill="#fff"></eva-icon>
        </span>
    </div>
</template>

<script>
import { EvaIcon } from 'vue-eva-icons';
import Device from '../shared/Device';

export default {
    data(){
        return {
            isTableOpen : false
        }
    },
    methods:{
        focusInput(){
            const input = document.querySelector('.app-content .mobile-input');
            input.focus();
        },
        openKeysTable(){
            this.isTableOpen = true;
            this.$emit('keysTable', this.isTableOpen);
        },
        closeKeysTable(){
            this.isTableOpen = false;
            this.$emit('keysTable', this.isTableOpen);
        }
    },
    components: {
        [EvaIcon.name]: EvaIcon
    }
}
</script>

<style>
.app-toolbar{
    display: flex;
    padding: 15px 10px 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
.mobile-input{
    flex:1;
    background: transparent;
    caret-color: transparent;
    border: 0;
    margin: 0;
    padding: 0;
}
.mobile-input:focus{
    outline: none;
}
.mobile-input.nothing-registerd{
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
}
.icon {
    margin-left: 10px;
}
.icon.close{
    margin-left: calc(100% - 25px);
}
</style>
