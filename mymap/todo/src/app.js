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
    console.log('todo bootstrap', props);
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
    console.log('todo mount', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    // console.log('todo unmount', props);
  },
};
