import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import tree from './views/nav1/tree.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import vedio from './views/nav2/vedio.vue'
import about from './views/nav2/about.vue'
import contact from './views/nav2/contact.vue'
import test from './views/nav2/test.vue'
import plan from './views/nav2/plan.vue'
import test2 from './views/nav2/test2.vue'
import setting from './views/nav2/setting.vue'

import left1 from './views/nav3/left1.vue'
import left2 from './views/nav3/left2.vue'
import left3 from './views/nav3/left3.vue'
import left4 from './views/nav3/left4.vue'

import middle1 from './views/nav3/middle1.vue'
import middle2 from './views/nav3/middle2.vue'
import middle3 from './views/nav3/middle3.vue'
import middle4 from './views/nav3/middle4.vue'
import middle5 from './views/nav3/middle5.vue'
import middle6 from './views/nav3/middle6.vue'
import middle7 from './views/nav3/middle7.vue'

import right1 from './views/nav3/right1.vue'
import right2 from './views/nav3/right2.vue'
import right3 from './views/nav3/right3.vue'
import right4 from './views/nav3/right4.vue'
import right5 from './views/nav3/right5.vue'
import right6 from './views/nav3/right6.vue'
import right7 from './views/nav3/right7.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '基础应用',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: '通讯录' },
            { path: '/form', component: Form, name: '家庭网新闻' },
            { path: '/tree', component: tree, name: '家族树(TUDO)' },
          
        ]
    },
    {
        path: '/',
        component: Home,
        name: '娱乐应用',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '相册集' },
            { path: '/page5', component: Page5, name: '日志' }
        ]
    },



{
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/left1', component: left1, name: '教育' }
        ]
            },

            {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/left2', component: left2, name: '教育' }
        ]
            },

             {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/left3', component: left3, name: '教育' }
        ]
            },
 {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/left4', component: left4, name: '教育' }
        ]
            },


            {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/middle1', component: middle1, name: '婚姻家庭' }
        ]
            },
             {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/middle2', component: middle2, name: '婚姻家庭' }
        ]
            },
 {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/middle3', component: middle3, name: '婚姻家庭' }
        ]
            },
             {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/middle4', component: middle4, name: '婚姻家庭' }
        ]
            },
             {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/middle5', component: middle5, name: '婚姻家庭' }
        ]
            },
             {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/middle6', component: middle6, name: '婚姻家庭' }
        ]
            },
             {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/middle7', component: middle7, name: '婚姻家庭' }
        ]
            },


{
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/right1', component: right1, name: '养老直通车' }
        ]
            },
            {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/right2', component: right2, name: '养老直通车' }
        ]
            },
            {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/right3', component: right3, name: '养老直通车' }
        ]
            },
            {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/right4', component: right4, name: '养老直通车' }
        ]
            },
            {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/right5', component: right5, name: '养老直通车' }
        ]
            },
            {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/right6', component: right6, name: '养老直通车' }
        ]
            },
            {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/right7', component: right7, name: '养老直通车' }
        ]
            },



    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/vedio', component: vedio, name: '影视' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-time',
        leaf: true,//只有一个节点
        children: [
            { path: '/test', component: test, name: '时间轴' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-date',
        leaf: true,//只有一个节点
        children: [
            { path: '/plan', component: plan, name: '家庭计划表' }
        ]
    },

     {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-date',
        leaf: true,//只有一个节点
        children: [
            { path: '/test2', component: test2, name: '家庭旅游' }
        ]
    },
  



    {
        path: '/',
        component: Home,
        name: '关于我们',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/about', component: about, name: '家庭网简介' },
            { path: '/contact', component: contact, name: '联系我们' }

        ]
    },


    {
        path: '/',
        component: Home,
        name: '设置(TODO)',
        iconCls: 'el-icon-setting',
        children:[
        {path:'/setting',component:setting,name:'系统设置'}]
    
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;