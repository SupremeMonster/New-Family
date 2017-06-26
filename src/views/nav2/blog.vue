<template>
<div style="margin-top:20px;line-height:40px">
	
  <el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="item in 4">
      <h3>{{ item }}</h3>
     
    </el-carousel-item>
  </el-carousel>

 <!-- 家庭日志模块在4000端口的nodejs服务器 -->
   <center>
   <a href="http://localhost:4000/blog" style="font-size:20px;text-decoration:none;line-height:50px" >
   <el-button size="small" type="primary" class="el-icon-edit">
     开始写家庭日志 </el-button></a>
    </center>
	</div>


  
</template>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}


.el-carousel__item h3 {
    color: white;
    font-size: 14px;
    opacity: 0;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(4n+1) {
    background:url(../../assets/rizhi1.jpg) no-repeat;
  }
  
  .el-carousel__item:nth-child(4n+2) {
   background:url(../../assets/rizhi2.jpg) no-repeat;
  }

  .el-carousel__item:nth-child(4n+3) {
   background:url(../../assets/rizhi3.jpg) no-repeat;
  }

  .el-carousel__item:nth-child(4n+4) {
   background:url(../../assets/rizhi4.jpg) no-repeat;
  }
</style>
<script>
  export default {
    data() {
      return {
        value4: null
      }
    }
  }
</script>