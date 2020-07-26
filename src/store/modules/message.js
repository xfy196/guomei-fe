export default {
  state: () => {
    return {
      msgList: [],
    };
  },
  mutations: {
    addMsg(state, data) {
      state.msgList.push(data);
    },
  },
  namespaced: true,
};
