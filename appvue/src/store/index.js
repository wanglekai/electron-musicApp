 
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={//要设置的全局访问的state对象
    showCardDialog: false,
    cardDialogData:{}
};
const getters = {   //实时监听state值的变化(最新状态)
    isShowCard(state) {  //方法名随意,主要是来承载变化的showFooter的值
       return state.showCardDialog
    },
    getCardData(state) {
        return state.cardDialogData
    }
};
const mutations = {
    setShowCard(state,bl) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);  
        state.showCardDialog = bl;
    },
    setCardData(state,data) {
        state.cardDialogData = data;
    }
}
const actions = {
    setStatus(context,bl) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性 
        context.commit('setShowCard',bl);
    },
    updataCard(context,data) {
        context.commit('setCardData',data);
    }
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
export default store;