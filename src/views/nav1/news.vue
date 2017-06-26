<template>

 <div class="juti_article " >
   <center><h1 class="juti_title">{{ title }}</h1></center>
   <span class="juti_date">{{ date|userDate }}</span>&nbsp;&nbsp;&nbsp;
   
     <p class="juti_body">{{ body }}</p>
 </div> 


</template>


<script>
export default {
  
  data () {
    return {
      title :'',
      date : '',
      body : '',
      items:[],
     
    }
  },
  methods : {
    getData(title){
        var title=this.$route.params.title;
        console.log(title)
        this.$http.get("http://localhost:8080/news/selectNewsByTitle/"+title).then((res)=>{             
  
               this.title=res.body.title;
               this.date=res.body.date;
               this.body=res.body.body;             
       }).catch(err=>{
        console.log(err);
         })
       },
  },
  mounted:function(){
    console.log(this.title)
      this.getData();
  }
  }

  </script>


  <style lang="scss">
.juti_title{
  margin-top:120px;
}

     .juti_date{
        margin-top:30px;
     }

     .juti_body{
       word-break:break-all;
    word-wrap:break-word;
      margin-top:20px;
   letter-spacing:0.5px;
   padding:10px;
   background:#eee;
   text-indent:50px;
   font-size:15px;
   line-height:34px;
     }


  </style>