<template>
<div class="div">

<h2 style="padding:20px">网站历程:</h2>
<div class="timezone">

<div class="timeLeft">
                <h2 style="font-size:20px">2017-04</h2>
                <div>
                    <p style="font-size:20px;line-height:15px">网站优化</p>
                    <ul>
                       性能优化,交互性增强。
                    </ul>
                </div>
</div>




            <div class="time" style="top:100px">
                <h2 style="font-size:30px">2017-03</h2>
                <div>
                    <p style="font-size:20px;line-height:15px">家庭网Vuejs第二版</p>
                    <ul>
                        掀翻第一版,重新选型搭建新版。
                    </ul>
                </div>
            </div>
            <div class="timeLeft" style="top: 200px;">
                <h2 style="font-size:20px">2017-01</h2>
                <div>
                    <p style="font-size:20px;line-height:15px">家庭门户网第一版</p>
                    <ul>
                       第一次做成门户形态的网站初版。
                    </ul>
                </div>
</div>

    <div class="time" style="top:300px">
                <h2 style="font-size:30px">2016-12</h2>
                <div>
                    <p style="font-size:20px;line-height:15px">功能需求分析</p>
                    <ul>
                       想好需要的功能,加入自己的一些创意。
                    </ul>
                </div>
            </div>



</div>




<div style="margin-top:100px">
<div style="float:left;margin-left:80px">
<center>
<img src="../../assets/shijianzhou1.jpg"/>
</center>
<h2 style="font-size:20px">
时光轴记录我们从出生到未来的历程</h2>
<center>
<a href="http://localhost:8081/static/timeaxis.html">
<el-button   size="small" type="success" icon="share" style="margin-top:30px">开启时光轴</el-button>
</a>
</center>
 </div>
 <div style="float:right;margin-right:100px">
 <center>
<img src="../../assets/jishizhou.jpg"/>
</center>
<h2 >记事轴记录整个家庭几年来经历的风风雨雨</h2>
<center>
<a href="http://localhost:8081/static/jishizhou.html">
<el-button   size="small" type="success" icon="share" style="margin-top:30px">开启家庭记事轴</el-button>
</a>
</center>
</div>

</div>
</div>
</template>

<style>
   .div{background:url(../../assets/backgroundImage.png)repeat-x;height:1100px}
            h1{
                text-align: center;
                color:#fff;
            }
            .timezone{
                width:6px;
                height: 350px;
                background: lightblue;
                margin: 0 auto;
                margin-top:50px;
                border-radius: 3px;
                position: relative;
                -webkit-animation: heightSlide 2s linear;
            }
            @-webkit-keyframes heightSlide{
                0%{
                    height: 0;
                }
                100%{
                    height: 350px;
                }
            }
            .timezone:after{
                content: '';
                width: 100px;
                color:#fff;
                position: absolute;
                margin-left: -35px;
                bottom: -30px;
                -webkit-animation: showIn 4s ease;
            }
            .timezone .time,.timezone .timeLeft{
                position: absolute;
                margin-left: -10px;
                margin-top:-10px;
                width:20px;
                height:20px;
                border-radius: 50%;
                border:4px solid rgba(255,255,255,0.5);
                background: lightblue;
                -webkit-transition: all 0.5s;
                -webkit-animation: showIn ease;
            }
            .timezone .time:nth-child(1){
                -webkit-animation-duration:1s;
            }
            .timezone .timeLeft:nth-child(2){
                -webkit-animation-duration:1.5s;
            }
            .timezone .time:nth-child(3){
                -webkit-animation-duration:2s;
            }
            .timezone .timeLeft:nth-child(4){
                -webkit-animation-duration:2.5s;
            }
            @-webkit-keyframes showIn{
                0%,70%{
                    opacity: 0;
                }
                100%{
                    opacity: 1;
                }
            }
            .timezone .time h2,.timezone .timeLeft h2{
                position: absolute;
                margin-left: -120px;
                margin-top: 3px;
                color:#eee;
                font-size: 14px;
                cursor:pointer;
                -webkit-animation: showIn 3s ease;
            }
            .timezone .timeLeft h2{
                margin-left: 60px;
                width: 100px;
            }
            .timezone .time:hover,.timezone .timeLeft:hover{
                border:4px solid lightblue;
                background: lemonchiffon;
                box-shadow: 0 0 2px 2px rgba(255,255,255,0.4);
            }
            .timezone .time div,.timezone .timeLeft div{
                position: absolute;
                top:50%;
                margin-top: -25px;
                left:50px;
                width: 300px;
                height: 50px;
                background: lightblue;
                border:3px solid #eee;
                border-radius: 10px;
                z-index: 2;
                overflow: hidden;
                cursor:pointer;
                -webkit-animation: showIn 3s ease;
                -webkit-transition: all 0.5s;
            }
            .timezone .timeLeft div{
                left:-337px;
            }
            .timezone .time div:hover,.timezone .timeLeft div:hover{
                height: 170px;
            }
            .timezone .time div p,.timezone .timeLeft div p{
                color: #fff;
                font-weight: bold;
                text-align: center;
            }
            .timezone .time:before,.timezone .timeLeft:before{
                content: '';
                position: absolute;
                top:0px;
                left: 32px;
                width: 0px;
                height: 0px;
                border:10px solid transparent;
                border-right:10px solid #eee;
                z-index:-1;
                -webkit-animation: showIn 3s ease;
            }
            .timezone .timeLeft:before{
                left:-33px;
                border:10px solid transparent;
                border-left:10px solid #eee;
            }
            .timezone .time div ul,.timezone .timeLeft div ul{
                list-style: none;
                width:300px;
                padding:5px 0 0;
                border-top:2px solid #eee;
                color:#fff;
                text-align: center;
            }
            .timezone .time div li,.timezone .timeLeft div li{
                display: inline-block;
                height: 25px;
                line-height: 25px;
            }
</style>