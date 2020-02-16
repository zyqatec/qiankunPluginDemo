import React, { useState } from 'react';
import { Card, Avatar, Button } from 'antd';

import styles from './index.less';
// import { formatMessage } from 'umi-plugin-locale';
export default function(props) {

  const [favs] = useState([
    {
      key: 'fav_1',
      icon: 'ant-design',
      title: 'Ant Design',
      link: 'https://ant.design'
    },
    {
      key: 'fav_2',
      icon: 'github',
      title: 'Github',
      link: 'https://www.github.com'
    },
    {
      key: 'fav_3',
      icon: 'apple',
      title: 'Apple',
      link: 'https://www.apple.com.cn'
    }
  ]);

  // console.log(props);

  const gotoTodo = () => {
    window.location.href = '/todo';
  };

  return (
    <div className={styles.normal}>
      <Card title="我的收藏" className={styles.card} style={{ width: 600 }}>
        <div className={styles.wrap}>
          {
            favs.map(f => {
              return (
                <div className={styles.app} key={f.key}>
                  <Avatar icon={f.icon} />
                  <p className={styles.title}>{f.title}</p>
                </div>
              );
            })
          }
        </div>
        {
          window.__POWERED_BY_QIANKUN__ ?
            <div className={styles.goto}>
              <Button type="primary" size="small" onClick={gotoTodo}>Go Todo</Button>
            </div>
          : null
        }
      </Card>
    </div>
  );
}
