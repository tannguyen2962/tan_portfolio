import React from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import styles from './home.less';

const Home = () => (
  <div className={styles.home}>
    <div className={styles.redContent}>This is home page</div>
    <Button type="primary" className={styles.clickMe}>
      Click me
      <DownOutlined />
    </Button>
  </div>
);

export default Home;
