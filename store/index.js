//import localConfigs from './../configs.json';
export const state = () => ({

})

export const mutations = {
  setConfigs (state, data) {
    state.configs = data
  },
  setUser (state, user) {
    state.user = user
  }/*,
  SET_NAV_BAR (state, datas) {
    state.navBar = datas
    const homeData = datas[0]
    if (homeData.name === '参考首页') {
      state.homeID = homeData.id
    }
  }*/
}

export const actions = {
  async nuxtServerInit ({ commit }, { req, $axios, app }) {



    //let cookie = ((req||{}).headers||{}).cookie || '';
    
    
    //let configs =localConfigs;
    if(process.env.NODE_ENV !== "development"){
      //configs  = await app.$api.getConfigs();
    }
   // console.log(localConfigs);
    //const 
    //user && commit('setUser', user)
    //configs   && commit('setConfigs', configs)
    //console.log(configs,user);
    //navBar && commit('SET_NAV_BAR', navBar)
  }
}