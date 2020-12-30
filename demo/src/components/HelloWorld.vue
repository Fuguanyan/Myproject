<template>
<div>
    <div class="A">
        <div>{{title}}</div>
        <child
        :pMag='msg'
        :pObj='msgObj'
        :pObjMsg='msgObj.msg3'
        :pArray='msgArray'
        :pIsBoolean='isMsg' class="a">
    </child>

    <child :pMag='msg'></child>
    </div>
    <el-button type="" @click="login">登录</el-button>
    <child slot="aa">这里是我的地盘</child>
    <child>你的地盘在哪里呢？</child>

</div>

</template>
<script>

    import Child from './Child'
    import {getApi,postApi} from '../api/api'
    export default {
        name:'Father',
        components:{
            Child
        },
        data () {
            return {
                title:'这是父组件',
                msg:'提交',
                msgExpA:'props也可以是一个表达式：我是表达式A',
                msgExpB:'，我是表达式B',
                msgObj:{
                    msg1:'props也可以是一个对象',
                    msg2:'另外，props也可以单传一个对象中的任一属性：',
                    msg3:'我是props对象中的属性msg3'
                },
                isMsg:true
            }
        },
        created() {
            this.getList();  
        },
        methods:{
            getList() {
                // 求一个数组里面最大的那个
                // some判断数组中是否满足指定的条件
                // ?
                let arr = [14,20,5,3,44]
                console.log(Math.max(...arr))
                getApi().then(res => {
                    console.log(res,'0000')
                })
            },
        
        
            login() {
                let obj = {
                    username:'admin',
                    password:123456
            };
                postApi({obj}).then(res => {
                    console.log(res,'我是res')
                })
            }
        }
    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.A {
    border: 1px solid red;
}
</style>
