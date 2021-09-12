import React from 'react';
import SVG from 'react-inlinesvg';
import cx from 'classnames';
import { Button, Card, Popover, Row, Col } from 'antd';

import styles from './services.less';

const Services = () => {
  const items = [
    { title: 'UX/UI Design', icon: 'layout-line.svg' },
    { title: 'Front-End Developer', icon: 'code.svg' },
    { title: 'Branding Design', icon: 'pencil-line' },
  ];

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const selectedCardIndex = 1;

  return (
    <div className={styles.services}>
      <div className={styles.center}>
        <h1>Services</h1>
        <h3> What i offer</h3>
      </div>
      <Row>
        {items.map((value, index) => {
          return (
            <Col className={styles.padding} span={8}>
              <Card
                className={cx(styles.card, {
                  [styles.active]: index === selectedCardIndex,
                })}
                title={
                  <>
                    <SVG src={`/src/assets/svgs/${value.icon}`} />
                    {value.title}
                  </>
                }
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
