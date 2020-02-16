import * as usersService from '../services/userPage';

// 首先我们根据 url 访问相关的 Route-Component，在组件中我们通过 dispatch 发送 action 到 model 里面的 effect 或者直接 Reducer

// 当我们将action发送给Effect，基本上是取服务器上面请求数据的，服务器返回数据之后，effect 会发送相应的 action 给 reducer，由唯一能改变 state 的 reducer 改变 state ，然后通过connect重新渲染组件。

// 当我们将action发送给reducer，那直接由 reducer 改变 state，然后通过 connect 重新渲染组件。


export default {
  namespace: 'userPage',
  state: {
    list: [],
    total: null,
  },
  reducers: {
    updateState(state, { payload: { data: list, total }}) {
     console.log(total);
     
      return { ...state, list, total }
    },
  },
  effects: {
    *showInpagination({ payload}, { call, put }) {
      const { data } = yield call(usersService.showInTable)
      console.log(data);
      
      yield put({
        type: 'updateState',
        payload: {
          data,
          total: data.length,
        }
      });

    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        console.log('1111111');    
        console.log(pathname);
        
        if (pathname === '/') {
          dispatch({
            type: 'showInpagination',
          })
          
        }

        
      })

    },
  },



}

