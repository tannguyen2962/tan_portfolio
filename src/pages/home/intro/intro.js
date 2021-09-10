import React from 'react';
import { Row, Col, Button } from 'antd';
import {
  FacebookFilled, DownloadOutlined, DownOutlined, CaretDownFilled,
} from '@ant-design/icons';
import styles from './intro.less';

const Intro = () => (
  <div className={styles.intro}>
    <Row>
      <Col className={styles.four} span={6}>
        <FacebookFilled />
        <FacebookFilled />
        <FacebookFilled />
      </Col>
      <Col className={styles.eight} span={8}>
        <h1>Hi, I am Tan Nguyen</h1>
        <h3>Front-End Developer</h3>
        <p>Semantic vector graphics. Before use icons</p>
        <Button className={styles.button} type="primary" icon={<DownloadOutlined />}>
          Download
          {' '}
          <DownOutlined />
        </Button>
      </Col>
      <Col span={10}>
        <div className={styles.ten}>{/* <img src="https://picsum.photos/300" /> */}</div>
      </Col>
    </Row>
    <Row>
      <Col span={8} offset={6}>
        <div className={styles.scroll}>
          <CaretDownFilled />

          <a href="https://picsum.photos/" className={styles.link}>
            Scroll Down
          </a>
        </div>
      </Col>
      <Col span={10} offset={10} />
    </Row>
  </div>
);
export default Intro;
