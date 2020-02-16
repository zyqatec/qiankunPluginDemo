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
    console.log('mymap bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('mymap mount', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('mymap unmount', props);
  },
};
