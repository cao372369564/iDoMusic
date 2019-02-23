import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

import Recommend from "components/recommend/recommend"
import Songs from "components/songs/songs"
import Rank from "components/rank/rank"
import Singer from "components/singer/singer"
import MusicList from 'base/MusicList'

export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/recommend'
        },
        {
            path:'/recommend',
            component:Recommend
        },
        {
            path:"/songs",
            component:Songs,
            // beforeEnter: (to, from ,next) => {
            //     // console.log(1111)
            //     next()
            // }
        },
        {
            path:'/rank',
            component:Rank
        },
        {
            path:'/singer',
            component: Singer
        },
        {
            path:'/search',
            name:'search',
            component:MusicList,
        },{
            path:'/search2',
            name:'search2',
            component:MusicList,
        },{
            path:'/search3',
            name:'search3',
            component:MusicList,
        }
    ]
})