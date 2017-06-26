<template>
<div>

<div class="sy_con_2">
	<div class="title">
		<span>News</span>新闻动态
	</div>
</div>

<div class="xw_con">

<div class="xw_1">
<div class="xw_4">教育<span><a href="#">More+</a></span></div>
<div class="xw_t"><img src="../../assets/xw_1_1.jpg"></div>
<div><div class="article">
<ul>
  <li v-for="item in items1">
<a><router-link :to="{name:'News', params: { title:item.title}}">
        <span class="title">{{item.title}}</span></router-link></a>
    <span class="date">{{item.date|userDate}}</span>
    <span class="clear"></span>
</li>
</ul></div>
</div>
</div>

<div class="xw_2">
<div class="xw_4">婚姻家庭<span><a href="#">More+</a></span></div>
<div><div class="article">

<ul>
  <li v-for="item in items2">
  	<a><router-link :to="{name:'News', params: { title:item.title}}">
        <span class="title">{{item.title}}</span></router-link></a>
    <span class="date">{{item.date|userDate}}</span>
    <span class="clear"></span>
  </li>
</ul>
   </div>
  </div>
</div>

<div class="xw_3">
<div class="xw_4">养老直通车<span><a href="#">More+</a></span></div>
<div>
   <div class="article">

<ul>
   <li v-for="item in items3">
   	<a><router-link :to="{name:'News', params: { title:item.title}}">
        <span class="title">{{item.title}}</span></router-link></a>
    <span class="date">{{item.date|userDate}}</span>
    <span class="clear"></span>

   </li>

</ul>
   </div>
  </div>
 </div>
</div>
</div>
</template>

<script>
	export default{
          data(){
          	return {
                      items1:[],
                      items2:[],
                      items3:[]

          	}
          },
 
        methods:{
           getList(){
           	  this.$http.get(`http://localhost:8080/selectNewsByCategory/education`).then((res)=>{
           	  	     this.items1=res.body;
           	  }).catch(err=>{
                
           	  	   console.log(err);
           	  });
           	  this.$http.get(`http://localhost:8080/selectNewsByCategory/family`).then((res)=>{
           	  	     this.items2=res.body;
           	  }).catch(err=>{
                
           	  	   console.log(err);
           	  });
           	  this.$http.get(`http://localhost:8080/selectNewsByCategory/olds`).then((res)=>{
           	  	     this.items3=res.body;
           	  }).catch(err=>{
                
           	  	   console.log(err);
           	  });


                if(this.items3||this.items2||this.items1.length==0){
                    this.$message({
                    type:'error',
                    message:'参数错误！'
                })
                   }



           },
        },

          mounted:function(){
            this.getList();
          }



	}
</script>














<style scoped>

.sy_con_2{width:1100px;margin:0 auto;margin-top:60px;border-bottom:1px #CCCCCC solid;clear:both;overflow:hidden;}
.sy_con_2 .title{font-size:25px;color:#1E387B;font-weight:bold;font-family:"Microsoft YaHei";float:left;}
.sy_con_2 .title img{width:65px;height:60px;}
.sy_con_2 .title span{font-size:28px;color:#CCCCCC;font-weight:bold;margin-right:5px;font-family:"Microsoft YaHei";}
.xw_con{width:1100px;margin:0 auto;clear:both;overflow:hidden;margin-top:30px;font-family:"Microsoft YaHei"; font-size:30px;height:400px}
.xw_1{width:330px;float:left;}
.xw_2{width:330px;float:left;margin-left:55px;}
.xw_3{width:330px;float:right;}
.xw_4{font-size:20px;border-bottom:dashed 1px #1E387B;width:350px;padding-bottom:3px;font-weight:bold;color:#0064D4}
.xw_4 span{margin-left:240px;}
.xw_t{height:80px;overflow:hidden;margin:20px 0px;*margin:25px 0px;}
.xw_t img{width:330px;height:80px;display:block}
.xw_con li{height:30px;line-height:30px;}
a{color:#5A5A5A;text-decoration:none;}
a:hover{color:#0064D4;text-decoration:none;}
li{list-style-type:square;*margin-left:-1px}
</style>