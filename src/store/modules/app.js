import { otherRouter, appRouter} from '@/router/router';
// import Util from '@'
import Vue from 'vue';

const app = {
  state:{
    menuList:[],
    routers:[
      otherRouter,
      ...appRouter
    ],
  },
  mutations:{
    updateMenulist(state){
      let menuList =[]
      appRouter.forEach((item, index) => {
        menuList.push(item);
      })
      state.menuList = menuList
    }
  }
}

export default app;