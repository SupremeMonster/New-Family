<template>
<div style="margin-top:30px;letter-spacing:1px;font-size:25px;font-family:'Comic Sans MS'">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="家庭网介绍" name="first">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;家庭网是以家长为内容主线，以家长、家庭为服务对象，以育儿、家庭消费、家长社区为服务主导，全面涵盖家长、家庭生活需求的方方面面。 注重现实社会的主要社会问题的解决，比如子女逆反，克服网瘾，融洽两代人的关系方面等等。（一般登陆家庭教育网站的人都是在生活中遇到问题的父母。）是未来网络细分化的一个趋向。家庭网是一个移动家庭的网络平台，通过建立以个人为基础、家庭为中心的关系网，实现家庭成员互动交流，并通过不断拓展的娱乐服务、增值业务、数字家庭业务、电子商务等实现家庭的一站式服务。

   <center>  <img src="../../assets/bottom1.jpg" style="margin-top:15px;width:400px;height:250px"/></center>
    </el-tab-pane>
    <el-tab-pane label="家庭网产品" name="second">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;家庭网的核心产品家族树，以每一位家庭成员为核心，展现其所处的 家庭网络，如同树枝蔓延开来。它体现了中华民族代代相传的血脉联系，是每一位华人寻根的足迹。参与到家庭网的每一位家庭成员，都能在家族树中找到自己的定位，清楚自己和其他成员的血缘关系，并通过家族树所建立起来的分支，加强与其他家人的沟通与联系。 家族树是整个网站应用的核心，是构成网站活动的核心群体。家庭相册、家庭日志、家庭影音等应用内容与家族树的人物关系发生直接联系。家族树的成员拥有了集体的记忆，因而对家庭相册、日志拥有补充和修改的权利，不同成员间的描述和记录，共同组成了一份“家庭记忆”。浓浓的亲情在你添一笔，我加一划的来往互动过程中，获得提升，家庭成员的交流因而增强
    </br>
<center><img src="../../assets/bottom2.jpg" style="margin-top:15px;width:400px;height:250px"/></center>
    </el-tab-pane>
    <el-tab-pane label="家庭网特征" name="third">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;家族网以个人为切入点，从家庭的沟通和传承出发，提供完善的家庭服务体系：以丰富家庭互动沟通为主，促进家庭娱乐休闲活动为辅。我们真诚地走入每个家庭中去，真挚地聆听每个家庭的迫切需求，真心地为用户创造一个新时代的移动在线家庭。打开家庭网，直接看到的都是当地的新闻、旅游计划等内容，是真正的城市门户。
    <center>
<img src="../../assets/bottom3.jpg" style="margin-top:15px;width:400px;height:250px"/></center>
    </el-tab-pane>
    <el-tab-pane label="家庭网未来发展" name="fourth">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生活工作互相渗透、多种商务形态B2B、B2C、C2C相互融合的趋势。多年前出现的SOHO现代城——Small Office Home Office仅仅是顺应现代生活工作方式在物质层次上的需求，而家庭网必将是顺应人们未来对生活和工作在互联网应用方面的需求。家庭网将生活工作中最核心、也是商业价值最大的信息提炼出来，融合在一个平台上供人们使用。
<center><img src="../../assets/bottom4.jpg" style="margin-top:15px;width:400px;height:250px"/></center>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>


