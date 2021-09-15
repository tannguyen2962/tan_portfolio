import React from 'react';
import { Row, Col, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import styles from './about.less';

const About = () => (
  <>
    <Row id="aboutMe" className={styles.about}>
      <Col xs={24} className={styles.textCenter}>
        <h1>AboutMe </h1>
        <h4>My introduce </h4>
      </Col>
    </Row>
    <Row>
      <Col xs={24} md={12} className={styles.aboutLeft}>
        <div className={styles.image} />
      </Col>
      <Col xs={24} md={12} className={styles.aboutRight}>
        <p> You can create a basic grid system by using a single set of Row </p>
        <div className={styles.flex}>
          <div className={styles.experience}>
            <span> 08+</span>
            <p>Years Experience</p>
          </div>
          <div className={styles.experience}>
            <span> 08+</span>
            <p>Years Experience</p>
          </div>
          <div className={styles.experience}>
            <span> 08+</span>
            <p>Years Experience</p>
          </div>
        </div>
        <div>
          {' '}
          <Button type="primary" icon={<DownloadOutlined />}>
            Download
          </Button>
        </div>
      </Col>
    </Row>
  </>
);

export default About;
