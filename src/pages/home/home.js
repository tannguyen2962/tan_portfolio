import React from 'react';
import { Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import BackgroundSlideshow from 'react-background-slideshow';
import image1 from '../../assets/images/bg1.jpg';
import image2 from '../../assets/images/bg2.jpg';
import image3 from '../../assets/images/bg3.jpg';
import styles from './home.less';

const Home = () => {
  const history = useHistory();
  const toSignUp = () => {
    history.push('/signUp');
  };

  return (
    <div className={styles.home}>
      <div className={styles.background}>
        <BackgroundSlideshow images={[image1, image2, image3]} />
        <div className={styles.navbar}>
          <ul>
            <li>
              <h2> Portfolio</h2>
            </li>
            <li>
              <h2> Home</h2>
            </li>
          </ul>
        </div>
        <div className={styles.title}>
          <h1>Welcome to the Portfolio</h1>
          <Button onClick={toSignUp} type="primary" shape="round" icon={<CaretRightOutlined />}>
            Getting Started
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
