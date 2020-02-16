// import { extend } from 'umi-request';

// const request = extend({
//   prefix: '/api',
// });

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

//export const qiankun = request('/todo').then(apps => ({ apps }));

export const qiankun = new Promise((resolve) => {
  resolve({
    apps: [
      {
        name: 'Todo',
        entry: 'http://localhost:8821/todo',
        base: '/todo',
        mountElementId: 'root-slave',
      },
      {
        name: 'MyFav',
        entry: 'http://localhost:8820/myfav',
        base: '/myfav',
        mountElementId: 'root-slave',
        props: {
          testProp: 'test',
        },
      },
      {
        name: 'MyMap',
        entry: 'http://localhost:8822/mymap',
        base: '/mymap',
        mountElementId: 'root-slave',
        props: {
          testProp: 'test',
        },
      },
      {
        name: 'User',
        entry: 'http://localhost:8823/users',
        base: '/users',
        mountElementId: 'root-slave',
        props: {
          testProp: 'test',
        },
      },
    ]
  });
});

// export const qiankun = new Promise(resolve => {
//   resolve({
//     lifeCycles: {
//       beforeLoad: props => {
//         console.log('beforeLoad:', props);
//       },
//       beforeMount: props => {
//         console.log('beforeMont:', props);
//       },
//       afterMount: props => {
//         console.log('afterMount:', props);
//       },
//       beforeUnmount: props => {
//         console.log('beforeUnmount:', props);
//       },
//       afterUnmount: props => {
//         console.log('afterUmount:', props);
//       }
//     }
//   });
// });
