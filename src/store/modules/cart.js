import _, { startCase } from "lodash"
export default {
    state: () => {
        return {
            carts: []
        }
    },
    mutations: {
        //  添加购物车
        addCart(state, good) {
            // 首先判断这个数据在state是否已经存在 如果存在我们直接把他的总数++ 不然总数为1
            let item = state.carts.find(item => item.productId === good.productId)
            // 如果存在需要总数++
            if (item) {

                item.totalNum++;
            } else {
                good.totalNum = 1;
                good.checked = true;
                state.carts.push(good);
            }
        },
        updateCartNum(state, {num, id}){
            // 先去找到id对应的商品
            let product = state.carts.find(item => item.productId === id);
            product.totalNum = num;
        }
    },
    actions: {
        // 这里我们需要将添加购物车的操作放入商品的store中需要在商品中找到这个数据然后把它添加到carts中去
        addCart({ commit }, good) {
            commit("addCart", good);
        },
        updateCartNum({commit}, {num, id}){
            commit("updateCartNum", {num, id});
        }
    },
    getters: {
        // 计算总价
        totalPrice(state) {
            return state.carts.reduce((value, item) => {
                return value + item.totalNum * parseFloat(item.price);
            }, 0)
        },
        getCarts(state){
            // 在这里进行对购物车数据的分组计算
            return  _.groupBy(state.carts, "shopName");
        },
        getTotalNum(state){
            return state.carts.reduce((value, item) => {
                return value + item.totalNum;
            }, 0) 
        },
    },
    namespaced: true
}