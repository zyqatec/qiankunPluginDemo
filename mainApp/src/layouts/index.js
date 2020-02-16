import { Menu } from 'antd';
import Link from 'umi/link';
import styles from './index.less';

function BasicLayout(props) {
  const { location } = props;
  const selectKey = '/' + location.pathname.split('/')[1];
  return (
    <div className={styles.normal}>
      <div className={styles.menuWrap}>
        <Menu
          selectedKeys={[selectKey]}
        >
          <Menu.Item key="/">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="/todo">
            <Link to="/todo">Todo</Link>
          </Menu.Item>
          <Menu.Item key="/myfav">
            <Link to="/myfav">MyFav</Link>
          </Menu.Item>
          <Menu.Item key="/mymap">
            <Link to="/mymap">MyMap</Link>
          </Menu.Item>
          <Menu.Item key="/users">
            <Link to="/users">Users</Link>
          </Menu.Item>
        </Menu>
      </div>
      {props.children}
      <div id="root-slave" className={styles.appContainer}></div>
    </div>
  );
}

export default BasicLayout;
