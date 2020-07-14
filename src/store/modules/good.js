export default {
    state: () => {
        return {
            goodList: []
        }
    },
    mutations: {
        setList(state, list){
            state.goodList = [
                ...state.goodList,
                ...list
            ]
        }
    },
    actions: {
        setList({commit}, list){
            commit("setList", list);
        }
    },
    getters: {

    },
    namespaced: true
}