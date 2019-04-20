<template>
    <div class="card">
        <div class="card-header">{{caption}}</div>
        <div class="card-main">
            <div class="main-description" v-html="data"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Card',
    props: {
        caption : String,
        data : String
    }
}
</script>
