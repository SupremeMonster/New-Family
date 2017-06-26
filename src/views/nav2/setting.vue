<template>
<div style="margin-top:30px">
<h2>1 皮肤设置</h2>
<br/>
<el-button type="success"  @click="changeGreen">墨绿</el-button>
<el-button type="danger"  @click="changeRed">艳丽红</el-button>
<el-button type="info"  @click="changeBlue">清新蓝</el-button>
<el-button type="warning"  @click="changeOrange">橙色</el-button>
</div>
</template>


<script>
  export default {
       data(){
       return{

       }},
       methods: {
          changeGreen(){
          $('.el-col-10,.header,.el-col-4').css('background','green')
       },
       changeRed(){
          $('.el-col-10,.header,.el-col-4').css('background','red')
       },
       changeBlue(){
          $('.el-col-10,.header,.el-col-4').css('background','skyblue')
       },
       changeOrange(){
          $('.el-col-10,.header,.el-col-4').css('background','orange')
       }

        

       }


  }

</script>


<style>

</style>