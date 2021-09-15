import React from 'react';
import { Row, Col } from 'antd';
import SVG from 'react-inlinesvg';
import styles from './footer.less';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Row className={styles.rowElement}>
        <Col span={7} offset={2} className={styles.colElement}>
          <div className={styles.textElement}>
            <h1>Tan Nguyen </h1>
            <h3>Front-End Developer</h3>{' '}
          </div>
        </Col>
        <Col span={6} className={styles.colElement}>
          <div className={styles.linkElement}>
            <span> Services</span>
            <span> Portfolio</span>
            <span> ContactMe</span>
          </div>
        </Col>
        <Col span={7} className={styles.colElement}>
          <SVG src="/src/assets/svgs/facebook.svg" color="white" />
          <SVG src="/src/assets/svgs/github.svg" />
          <SVG src="/src/assets/svgs/twitter.svg" />
        </Col>
      </Row>
      <div className={styles.textFooter}>
        <h3> From MixiGaming With Love</h3>{' '}
      </div>
    </div>
  );
};
export default Footer;
