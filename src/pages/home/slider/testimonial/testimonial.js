import React from 'react';
import {
  Carousel, Row, Col, Card,
} from 'antd';
import styles from './testimonial.less';

const Testimonial = () => {
  return (
    <>
      <div className={styles.textCenter}>
        {' '}
        <h1> Testimonial</h1>
        <h3> My client saying</h3>
        {' '}
      </div>
      <Carousel effect="fade">
        <div className={styles.testimonial}>
          <Row>
            <Col span={6} offset={6}>
              <div className={styles.card}>
                <Card title="Card title" bordered={false} style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div>
            </Col>
            <Col span={6}>
              {' '}
              <h3>1</h3>
            </Col>
          </Row>
        </div>
        <div className={styles.testimonial}>
          <Row>
            <Col span={6} offset={6}>
              <div className={styles.card}>
                <Card title="Card title" bordered={false} style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div>
            </Col>
            <Col span={6}>
              {' '}
              <h3>1</h3>
            </Col>
          </Row>
        </div>
      </Carousel>
    </>
  );
};
export default Testimonial;
