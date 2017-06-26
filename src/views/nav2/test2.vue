<template>

<div style="margin-top:20px;font-size:20px;">
旅游计划可添加到家庭任务表中
<div style="margin-top:30px">
<div style="margin-left:30px">
<el-steps :space="60" :active="10" finish-status="success">
  <el-step title="已去过"></el-step>
  <el-step title=""></el-step>
  <el-step title=""></el-step>
  <el-step title=""></el-step>
  <el-step title="" ></el-step>
  <el-step title="" ></el-step>
  <el-step title="" ></el-step>
  <el-step title="" ></el-step>
  <el-step title="" ></el-step>
  <el-step title="" ></el-step>
  <el-step title="" icon="close "></el-step>
</el-steps>
</div>
<el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i>香港</span>
  <img src="../../assets/xianggang.jpg"/>
  <br/><a style="text-decoration:none" href="http://you.ctrip.com/hotels/hongkong38.html?allianceid=4897&sid=962718" >查看旅游攻略</a>
  </el-tab-pane>
  <el-tab-pane label="澳门">
<img src="../../assets/aomen.jpg"/>
<br/><a style="text-decoration:none" href="http://you.ctrip.com/place/macau39.html" >查看旅游攻略</a>
  </el-tab-pane>
  
  <el-tab-pane label="厦门">
<img src="../../assets/xiamen.jpg"/>
<br/><a style="text-decoration:none" href="http://you.ctrip.com/place/xiamen21.html" >查看旅游攻略</a>
  </el-tab-pane>
  <el-tab-pane label="北京">
  <img src="../../assets/beijing.jpg"/>
<br/><a style="text-decoration:none" href="http://you.ctrip.com/place/beijing1.html" >查看旅游攻略</a></el-tab-pane>
  <el-tab-pane label="重庆">
  <img src="../../assets/chongqing.jpg"/>
<br/><a style="text-decoration:none" href="http://you.ctrip.com/place/chongqing158.html" >查看旅游攻略</a></el-tab-pane>
  <el-tab-pane label="成都">
<img src="../../assets/chengdu.jpg"/>
<br/><a style="text-decoration:none" href="http://you.ctrip.com/place/chengdu104.html" >查看旅游攻略</a>
  </el-tab-pane>
  
  <el-tab-pane label="青岛">
<img src="../../assets/qingdao.jpg"/>
<br/><a style="text-decoration:none" href="http://you.ctrip.com/place/qingdao5.html" >查看旅游攻略</a>
  </el-tab-pane>
  <el-tab-pane label="大连">
  <img src="../../assets/dalian.jpg"/>
<br/><a style="text-decoration:none" href="http://you.ctrip.com/place/dalian4.html" >查看旅游攻略</a></el-tab-pane>
  <el-tab-pane label="三亚">
<img src="../../assets/sanya.jpg"/>
<br/><a style="text-decoration:none" href="http://you.ctrip.com/place/sanya61.html" >查看旅游攻略</a>
  </el-tab-pane>
  <el-tab-pane label="香格里拉">
<img src="../../assets/xianggelila.jpg"/>
<br/><a style="text-decoration:none" href="http://you.ctrip.com/place/xianggelila106.html" >查看旅游攻略</a>
  </el-tab-pane>
  <el-tab-pane label="新加坡">
  <img src="../../assets/xinjiapo.jpg"/>
<br/><a style="text-decoration:none" href="http://you.ctrip.com/place/singapore53.html" >查看旅游攻略</a>
  </el-tab-pane>
  <el-tab-pane label="添加旅游计划">
    <el-button icon="plus"><a href="http://localhost:8081/#/plan" style="text-decoration:none">添加旅游计划</a></el-button>
  </el-tab-pane>
</el-tabs>
</div>
<div style="margin-top:30px">
<center><el-button @click=getMap()>查看附近地图</el-button></center>
</div>
</div>
</template>

<script>

 export default {

    methods:{
      getMap(){
          location.href='../../static/map.html'
      }
    }
 }

</script>