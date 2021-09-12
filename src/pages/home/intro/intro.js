import React from 'react';
import { Row, Col, Button } from 'antd';
import { DownloadOutlined, DownOutlined, CaretDownFilled } from '@ant-design/icons';
import SVG from 'react-inlinesvg';
import styles from './intro.less';

const Intro = () => {
  const scrollToAbout = () => {
    const aboutMe = document.getElementById('aboutMe');

    window.scrollTo({
      top: aboutMe.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.intro}>
      <Row>
        <Col className={styles.four} span={6}>
          <SVG src="/src/assets/svgs/facebook.svg" width="30px" height="30px" />
          <SVG src="/src/assets/svgs/github.svg" />
          <SVG src="/src/assets/svgs/mail.svg" />
        </Col>
        <Col className={styles.eight} span={8}>
          <h1>Hi, I am Tan Nguyen</h1>
          <h3>Front-End Developer</h3>
          <p>Semantic vector graphics. Before use icons</p>
          <Button className={styles.button} type="primary" icon={<DownloadOutlined />}>
            Contact Me <DownOutlined />
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

            <span role="button" tabIndex={0} className={styles.link} onClick={scrollToAbout}>
              Scroll Down
            </span>
          </div>
        </Col>
        <Col span={10} offset={10} />
      </Row>
    </div>
  );
};

export default Intro;
