import React from 'react';
import SVG from 'react-inlinesvg';
import { Button, Card, Popover, Row, Col } from 'antd';

import styles from './services.less';

const Services = () => {
  const items = [
    { title: 'UX/UI Design', icon: '' },
    { title: 'Front-End Developer' },
    { title: 'Branding Design' },
  ];

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <div className={styles.services}>
      <div className={styles.center}>
        <h1>Services</h1>
        <h3> What i offer</h3>
      </div>
      <Row>
        {items.map((value) => {
          return (
            <Col className={styles.padding} span={8}>
              <Card
                className={styles.card}
                title={value.title}
                extra={
                  <Popover content={content} title="Front-End Developer" trigger="click">
                    <Button>View More</Button>
                  </Popover>
                }
                style={{ width: 300 }}
              >
                <SVG
                  src="/src/assets/svgs/calendar.svg"
                  width="50px"
                  height="50px"
                  fill="#c91f37"
                />
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Services;
