import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import telephone from './views/nav1/telephone.vue'
import newsAll from './views/nav1/newsAll.vue'
import user from './views/nav1/user.vue'
import tree from './views/nav1/tree.vue'
import photo from './views/nav2/photo.vue'
import blog from './views/nav2/blog.vue'
import vedio from './views/nav2/vedio.vue'
import about from './views/nav2/about.vue'
import contact from './views/nav2/contact.vue'
import timeaxis from './views/nav2/timeaxis.vue'
import plan from './views/nav2/plan.vue'

import setting from './views/nav2/setting.vue'

import news from './views/nav1/news.vue'

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
            { path: '/telephone', component: telephone, name: '通讯录' },
            { path: '/newsAll', component: newsAll, name: '家庭网新闻' },
            { path: '/tree', component: tree, name: '家族树(TUDO)' },
          
        ]
    },
    {
        path: '/',
        component: Home,
        name: '娱乐应用',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/photo', component: photo, name: '相册集' },
            { path: '/blog', component: blog, name: '日志' }
        ]
    },



 {
        path: '/',
        hidden:'true',
        component: Home,
        name:'家庭网新闻',
        children: [
            { path: '/news', component: news, name: '新闻' }
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
            { path: '/timeaxis', component: timeaxis, name: '时间轴' }
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