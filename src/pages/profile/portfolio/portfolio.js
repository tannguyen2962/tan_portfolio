import { ArrowRightOutlined } from '@ant-design/icons';
import { Carousel, Row, Col, Radio } from 'antd';
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import styles from './portfolio.less';

const Portfolio = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://614337aec8700e00178d01bb.mockapi.io/services').then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div className={styles.portfolio}>
      <div className={styles.textCenter}>
        <h1>Portfolio</h1>
        <h3> Most recent work </h3>
      </div>

      <Carousel autoplay dots infinite speed={500} slidesToShow={1} className={styles.carousel}>
        {items.map((value) => {
          return (
            <div key={items.title} style={{ backgroundColor: 'red' }}>
              <Row>
                <Col className={styles.textLeft} xs={24} md={12}>
                  <div className={styles.bgLeft} />
                </Col>
                <Col xs={24} md={12}>
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
