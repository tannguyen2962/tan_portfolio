import React from 'react';
import { Row, Col, Button } from 'antd';
import { DownloadOutlined, DownOutlined, CaretDownFilled } from '@ant-design/icons';
import SVG from 'react-inlinesvg';
import styles from './intro.less';

const Intro = ({ dataUser }) => {
  const scrollToAbout = () => {
    const aboutMe = document.getElementById('aboutMe');

    window.scrollTo({
      top: aboutMe.offsetTop,
      behavior: 'smooth',
    });
  };

  const socialNetwork = () => (
    <Col xs={{ span: 4, order: 1 }} md={{ span: 2, order: 1 }} lg={{ span: 6, order: 1 }}>
      <div className={styles.social}>
        <a href=" https://www.facebook.com/tannnguyen2962" target="_blank">
          <SVG src="/src/assets/svgs/facebook.svg" color="white" />
        </a>{' '}
        <a href=" https://www.facebook.com/tannnguyen2962" target="_blank">
          <SVG src="/src/assets/svgs/github.svg" />
        </a>
        <SVG src="/src/assets/svgs/mail.svg" />
      </div>
    </Col>
  );

  const iam = () => (
    <Col xs={{ span: 24, order: 3 }} md={{ span: 24, order: 3 }} lg={{ span: 8, order: 2 }}>
      <div className={styles.iam}>
        <div className={styles.name}>
          <h1>Hi I am </h1>
          <h1 className={styles.nameUser}>{dataUser?.name}</h1>
        </div>
        <h2>{dataUser?.work}</h2>
        <p>Semantic vector graphics. Before use icons</p>
        <Button className={styles.button} type="primary" icon={<DownloadOutlined />}>
          Contact Me <DownOutlined />
        </Button>
      </div>
    </Col>
  );

  const avatar = () => (
    <Col xs={{ span: 20, order: 2 }} md={{ span: 22, order: 2 }} lg={{ span: 10, order: 3 }}>
      <div className={styles.avatar}>
        <img src="/src/assets/images/tanne.jpg" width="300px" height="300px" alt="" />
      </div>
    </Col>
  );

  const scrollDown = () => (
    <Col lg={24} xs={24}>
      <div className={styles.scroll}>
        <CaretDownFilled />
        <span role="button" tabIndex={0} className={styles.link} onClick={scrollToAbout}>
          Scroll Down
        </span>
      </div>
    </Col>
  );

  return (
    <div className={styles.intro} id="intro">
      <div className={styles.title}>
        <h1> Welcome</h1>
      </div>
      <Row>
        {socialNetwork()}
        {iam()}
        {avatar()}
      </Row>
      <Row>{scrollDown()}</Row>
    </div>
  );
};

export default Intro;