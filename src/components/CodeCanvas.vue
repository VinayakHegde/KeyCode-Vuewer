<template>
<div class="keycode-canvas-card">
    <canvas id="keycode-canvas" width="128" height="128">
        Your browser does not support the HTML5 canvas tag.
    </canvas>
    <span v-bind:class="{'dummy' : draw}"></span>
</div>
</template>

<script>
export default {
    name : 'CodeCanvas',
    props:{
        code : Number
    },
    computed : {
        draw() {
            const content = this.code;
            let canvas =  document.getElementById('keycode-canvas');
            if(canvas){
                
                const context = canvas.getContext('2d');

                context.clearRect(0, 0, canvas.width, canvas.height);
                
                context.textBaseline = 'middle';
                context.textAlign = 'center';
                context.font = '6em "Montserrat", "sans-serif"';
                context.fillStyle = '#000';
                context.fillText(content, canvas.width / 2, canvas.height / 2, canvas.width);

                const link = document.querySelector("link[rel*='icon']");
                link.type = 'image/x-icon';
                link.href = canvas.toDataURL('image/png');
            }
            return this.code;
        }
    }
}
</script>

<style>
.keycode-canvas-card{
    height: 100px;
}
</style>
