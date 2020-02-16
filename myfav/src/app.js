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
    console.log('myfav bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('myfav mount', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('myfav unmount', props);
  },
};
