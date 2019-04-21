<template>
    <div class="keycodes-table">
        <div class="table-headers card-header table-row">
            <span class="column-keycode">Code</span>
            <span class="column-keyname">Name</span>
        </div>
        <div class="table-contents">
            <div class="table-row" v-for="(value, key) in keyCodes[0]" :key="key">
                <span class="column-keycode">{{key}}</span>
                <span class="column-keyname">{{value}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import KeyCodes from '../shared/KeyCodes.json';
console.log(KeyCodes);
export default {
    name:'CodeTable',
    data(){
        return{
            keyCodes : KeyCodes
        };
    }
    
}
</script>

<style>
.keycodes-table{
    flex: 1;
    display:flex;
    flex-direction: column;
}
.table-contents{
    flex: 1;
    overflow: auto;
}
.table-row {
    height: 25px;
    line-height: 25px;
    border-bottom: 1px solid #8080801c;
    display: flex;
    flex-direction: row;
}
.column-keycode {
    display: inline-flex;
    width: 30%;
    justify-content: center;
    border: 1px solid #8080801c;
    border-width: 0 1px;
}
.column-keyname {
    display: inline-flex;
    flex: 1;
    text-indent: 20px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
