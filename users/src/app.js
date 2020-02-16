export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('user bootstrap', props);
    // const { loading } = props;
    // const { _store = {} } = window.g_app || {};
    // const { dispatch } = _store || {};
    // dispatch && dispatch({
    //   type: 'base/setLoading',
    //   payload: {
    //     loading
    //   }
    // });
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('user mount', props);
    // const { _store = {} } = window.g_app || {};
    // const { dispatch } = _store || {};
    // dispatch && dispatch({
    //   type: 'base/showInpagination',
    // });
    
  },
  // 应用卸载之后触发
  async unmount(props) {
    // console.log('todo unmount', props);
  },
};
