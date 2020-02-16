
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/todo' },
        { path: '/myfav' },
        { path: '/mymap' },
        { path: '/users' }
      ]
    }
  ],
  // publicPath: '/main/',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'mainApp',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
    ['@umijs/plugin-qiankun', {
      master: {
        apps: [{
          name: 'Todo',
          entry: '//localhost:8821',
          base: '/todo',
          mountElementId: 'root-slave',
          props: { loading: true }
        },
        {
          name: 'MyFav',
          entry: '//localhost:8820',
          base: '/myfav',
          mountElementId: 'root-slave'
        },
        {
          name: 'MyMap',
          entry: '//localhost:8822',
          base: '/mymap',
          mountElementId: 'root-slave'
        },{
          name: 'User',
          entry: '//localhost:8823',
          base: '/users',
          mountElementId: 'root-slave'
        }],
        jsSandbox: true,
        prefetch: true
      }
    }]
  ],
}
