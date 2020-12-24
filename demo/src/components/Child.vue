<template>
<div class='child-box'>
    <slot name="aa"></slot>
    <button>{{pMag}}</button>
    <slot></slot>
    
</div>
</template>
<script>
    export default {
        name:'Child',
        props:['pMag','pExpression','pObj','pObjMsg','pArray','pIsBoolean'],
        data () {
            return {
                title:'这是子组件',
                arr:['123456789']
            }
        },
        created() {
            this.show();
        },
        methods:{
            show() {
            var arr = 'abcdefg'
        var str = arr.slice(1,5) + '***'
            console.log(str,'88888')
            }
        }
    };
</script>
<style scoped>
li {
    list-style: none;
}
</style>