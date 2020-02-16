// import { formatMessage } from 'umi-plugin-locale';
import React, { useState } from 'react';
import { Card, Checkbox, Button, Icon } from 'antd';
// import { connect } from 'dva';
// import { useRootExports } from 'umi';

import styles from './index.less';

function Todo(props) {

  // const rootExports = useRootExports();
  // useRootExports();
  // const { loading } = props;
  // console.log(props);

  const [todos, setTodos] = useState([
    {
      key: 'todo_1',
      title: 'Coding',
      finish: true
    },
    {
      key: 'todo_2',
      title: 'Learning ES6',
      finish: false
    },
    {
      key: 'todo_3',
      title: 'To do something',
      finish: false
    }
  ]);

  const addTodos = () => {
    const len = todos.length + 1;
    setTodos([
      ...todos,
      {
        key: `todo_${len}`,
        title: `New item ${len}`,
        finish: false
      }
    ]);
  };

  // if (loading) {
  //   return (
  //     <div className={styles.normal}>loading...</div>
  //   );
  // }

  return (
    <div className={styles.normal}>
      <Card title="Todos" className={styles.card} style={{ width: 600 }}>
        {
          todos.map(t => {
            return (
              <p key={t.key}>
                <Checkbox checked={t.finish}>{t.title}</Checkbox>
              </p>
            );
          })
        }
        <div>
          <Button type="primary" block onClick={addTodos}><Icon type="plus" />Add todos</Button>
        </div>
      </Card>
    </div>
  );
};

// export default connect(({ base }) => ({ loading: base.loading }))(Todo);
export default Todo;
