import React from 'react';
// import ReactDom from 'react-dom';
// import fetch from 'isomorphic-fetch';
import { connect } from 'dva';
// import { Menu } from 'antd';
import { qiankunStart } from 'umi';
// import { registerMicroApps, /*runAfterFirstMounted, setDefaultMountApp, */start } from 'qiankun';

import styles from './index.less';

// @connect(({ base }) => ({ base }))
class MainPage extends React.Component {

  constructor(props) {
    super(props);
    // const { dispatch } = props;
    // dispatch({
    //   type: 'base/getApps',
    // });
    qiankunStart();
  }

  render() {
    // const { location } = this.props;
    // const selectKey = '/' + location.pathname.split('/')[1];
    // console.log(selectKey);
    return (
      <div className={styles.normal}>
        <div className={styles.main}>
          Main app index page.
        </div>
      </div>
    );
  }
};

export default connect(({ base }) => ({ base }))(MainPage);
