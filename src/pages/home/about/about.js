import React from 'react';
import { Row, Col, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import styles from './about.less';

const About = () => (
  <>
    <Row id="aboutMe" className={styles.about}>
      <Col xs={24}>
        <div className={styles.textCenter}>
          <div className={styles.title}>
            <h1>About</h1>
            <h2> Me </h2>{' '}
          </div>
          <h3>My introduce </h3>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xs={24} md={12}>
        <div className={styles.aboutLeft}>
          <div className={styles.image} />
        </div>
      </Col>
      <Col xs={24} md={12}>
        <div className={styles.aboutRight}>
          <p> You can create a basic grid system by using a single set of Row </p>
          <div className={styles.flex}>
            <div className={styles.experience}>
              <span> 04+</span>
              <p>
                Years of <h3>Hutech University</h3>
              </p>
            </div>
            <div className={styles.experience}>
              <span> 06+</span>
              <p>
                Months of <h3>Kmin Academy</h3>
              </p>
            </div>
            <div className={styles.experience}>
              <span> 02+</span>
              <p>
                Years <h3> KMS Technology </h3>
              </p>
            </div>
          </div>
          <div>
            {' '}
            <Button type="primary" icon={<DownloadOutlined />}>
              Download
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  </>
);

export default About;
