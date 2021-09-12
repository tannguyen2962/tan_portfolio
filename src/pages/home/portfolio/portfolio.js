import { ArrowRightOutlined } from '@ant-design/icons';
import { Carousel, Row, Col, Radio } from 'antd';
import React from 'react';
import styles from './portfolio.less';

const Portfolio = () => {
  const items = [{ title: 'Modern Web' }, { title: 'Design Web' }, { title: 'UX UI' }];

  return (
    <div className={styles.portfolio}>
      <div className={styles.textCenter}>
        <h1>Portfolio</h1>
        <h3> Most recent work </h3>
      </div>

      <Carousel autoplay dots infinite speed={500} slidesToShow={1} className={styles.carousel}>
        {items.map((value) => {
          return (
            <div style={{ backgroundColor: 'red' }}>
              <Row>
                <Col className={styles.textLeft} span={6} offset={6}>
                  <div className={styles.bgLeft} />
                </Col>
                <Col span={6}>
                  <div className={styles.textRight}>
                    <h2>{value.title}</h2>
                    <span>
                      When there is a group of content on the same level. When there is a group of
                      content on the same level
                    </span>
                    <Radio.Button className={styles.radioButton} value="primary">
                      Demo
                      <ArrowRightOutlined />
                    </Radio.Button>
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Portfolio;
