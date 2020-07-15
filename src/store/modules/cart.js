import _, { startCase } from "lodash"
export default {
    state: () => {
        return {
            carts: [],
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
        updateCartNum(state, { num, id }) {
            // 先去找到id对应的商品
            let index = state.carts.findIndex(item => item.productId === id);
            let product = state.carts[index];
            product.totalNum = num;
            this._vm.$set(state.carts, index, product)
        },
        updateCheck(state, id) {
            let index = state.carts.findIndex(item => item.productId === id);
            let product = state.carts[index];
            this._vm.$set(state.carts, index, product);
        },
        updateAllChecked(state, checked) {
            state.carts.map(item => {
                return item.checked = checked
            })
            state.carts = [
                ...state.carts
            ]
        },
        updateGroupAllChecked(state, name) {
            state.carts.map(item => {
                if (item.shopName === name) {
                    item.checked = !item.checked;
                }
            });
            state.carts = [
                ...state.carts
            ]
        }
    },
    actions: {
        // 这里我们需要将添加购物车的操作放入商品的store中需要在商品中找到这个数据然后把它添加到carts中去
        addCart({ commit }, good) {
            commit("addCart", good);
        },
        updateCartNum({ commit }, { num, id }) {
            commit("updateCartNum", { num, id });
        },
        updateCheck({ commit }, id) {
            commit("updateCheck", id);
        },
        updateAllChecked({ commit }, checked) {
            commit("updateAllChecked", checked);
        },
        updateGroupAllChecked({ commit }, name) {
            commit("updateGroupAllChecked", name)
        }
    },
    getters: {
        // 计算总价
        totalPrice(state) {
            let totalPrice = 0;
            state.carts.forEach(item => {
                if (item.checked) {
                    totalPrice += item.totalNum * parseFloat(item.price);
                }
            });
            return totalPrice
        },
        getCarts(state) {
            // 在这里进行对购物车数据的分组计算
            let data = _.groupBy(state.carts, "shopName");
            let allChecked = false
            Object.keys(data).forEach(key => {
                data[key].allChecked = data[key].every(item => {
                    return item.checked;
                })
            })
            return data
        },
        getTotalNum(state) {
            let totalNum = 0;
            state.carts.forEach(item => {
                if (item.checked) {
                    totalNum += item.totalNum;
                }
            })
            return totalNum;
        },
        getIsAllCheck(state) {
            return state.carts.every(item => {
                return item.checked
            })
        }
    },
    namespaced: true
}