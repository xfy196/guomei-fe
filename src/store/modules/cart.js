import _ from "lodash"
export default {
    state: () => {
        return {
            carts: [],
            // true为完成编辑状态
            modifyState: true
        }
    },
    mutations: {
        //  添加购物车
        addCart(state, good) {
            if (!state.carts.length) {
                state.modifyState = true
            }
            // 首先判断这个数据在state是否已经存在 如果存在我们直接把他的总数++ 不然总数为1
            let item = state.carts.find(item => item.productId === good.productId)
            // 如果存在需要总数++
            if (item) {

                item.totalNum = item.totalNum || item.totalNum++;
            } else {
                good.totalNum = 1;
                good.checked = true;
                good.modifyState = false
                state.carts.push(good);
                state.carts = [
                    ...state.carts
                ]
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
        },
        updateGroupAllChecked(state, name) {
            state.carts.map(item => {
                if (item.shopName === name) {
                    return item.checked = !item.checked;
                }
            });
        },
        /**
         * 删除单个商品
         * @param {*} state 
         * @param {*} id 
         */
        deleteCar(state, id) {
            let index = state.carts.findIndex(item => item.productId === id);
            state.carts.splice(index, 1);
        },
        /**
         * 修改是否编辑的状态
         * @param {*} state 
         * @param {*} mState 
         */
        modifyState(state, mState) {
            state.modifyState = mState;
            // 同时将所有购物车商品的modifyState修改为false
            if (!state.modifyState) {
                state.carts.map(item => {
                    return item.modifyState = false
                });
            }

        },
        /**
         * 修改分组店铺的选择框选中状态
         * @param {*} state 
         * @param {*} name 
         */
        updateGroupAllModifyChecked(state, name) {

            state.carts.map(item => {
                if (item.shopName === name) {
                    return item.modifyState = !item.modifyState;
                }
            });
            state.carts = [
                ...state.carts
            ]
        },
        /**
         * 修改所有的所有商品选中的状态
         * @param {*} state 
         * @param {*} checked 
         */
        updateAllModifyChecked(state, checked) {
            state.carts.map(item => {
                item.modifyState = checked
            })
        },
        /**
         * 修该单个商品的选中状态
         * @param {*} state 
         * @param {*} id 
         */
        updateModifyChecked(state, id) {
            let index = state.carts.findIndex(item => item.productId === id);
            let product = state.carts[index];
            this._vm.$set(state.carts, index, product);
        },
        // 删除已选中的商品
        deleteChooseCart(state) {
            state.carts = [
                ...state.carts.filter(item => {
                    return !item.modifyState;
                })
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
        },
        deleteCar({ commit }, id) {
            commit("deleteCar", id);
        },
        modifyState({ commit }, mState) {
            commit("modifyState", mState);
        },
        updateGroupAllModifyChecked({ commit }, name) {
            commit("updateGroupAllModifyChecked", name);
        },
        updateAllModifyChecked({ commit }, checked) {
            commit("updateAllModifyChecked", checked)
        },
        updateModifyChecked({ commit }, id) {
            commit("updateModifyChecked", id);
        },
        /**
         * 删除已选择的商品
         */
        deleteChooseCart({ commit }) {
            commit("deleteChooseCart");
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
            return totalPrice.toFixed(2);
        },
        getCarts(state) {
            // 在这里进行对购物车数据的分组计算
            let data = _.groupBy(state.carts, "shopName");
            let allChecked = false
            let allModifyState = false
            Object.keys(data).forEach(key => {
                data[key].allChecked = data[key].every(item => {
                    return item.checked;
                });

            })
            Object.keys(data).forEach(key => {
                data[key].allModifyState = data[key].every(item => {
                    return item.modifyState
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
        },
        getModifyState(state) {
            return state.modifyState;
        },
    },
    namespaced: true
}