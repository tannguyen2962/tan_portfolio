import React from 'react';
import SVG from 'react-inlinesvg';
import cx from 'classnames';
import { Button, Card, Popover, Row, Col } from 'antd';

import styles from './services.less';

const Services = () => {
  const items = [
    {
      title: 'UX/UI Design',
      icon: 'layout-line.svg',
      description1: 'Photoshop',
      description2: 'Adobe Illustrator',
    },
    {
      title: 'Front-End Developer',
      icon: 'code.svg',
      description1: 'React JS',
      description2: 'Bootstrap',
      description3: 'HTML5/CSS3',
    },
    {
      title: 'Branding Design',
      icon: 'pencil-line.svg',
      description1: 'Identity',
      description2: 'Ideas',
    },
  ];

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const selectedCardIndex = 1;

  return (
    <div className={styles.services} id="service">
      <div className={styles.title}>
        <div className={styles.textTitle}>
          <h2> My</h2> <h1> Service</h1>
        </div>
        <h3> What i offer</h3>
      </div>
      <Row>
        {items.map((value, index) => {
          return (
            <Col key={value.title} xs={24} md={24} lg={24} xl={8}>
              <div className={styles.padding}>
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
                      <Button>Read More</Button>
                    </Popover>
                  }
                  style={{ width: 500 }}
                >
                  <div className={styles.contentPricing}>
                    <h2>50$ / 1 hour </h2>

                    <span> I am available for full time</span>
                    <span> {value.description1} </span>
                    <span>{value.description2}</span>
                    <span>{value.description3}</span>
                    <Button type="@color-primary" shape="round">
                      <p> Buy</p>
                    </Button>
                  </div>
                </Card>{' '}
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Services;
