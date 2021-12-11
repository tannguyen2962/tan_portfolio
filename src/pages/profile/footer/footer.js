import React from 'react';
import { Row, Col } from 'antd';
import SVG from 'react-inlinesvg';
import styles from './footer.less';

const Footer = ({ dataUser }) => {
  return (
    <div className={styles.footer} id="contact">
      <Row className={styles.rowElement}>
        <Col xs={24} md={24} lg={8}>
          <div className={styles.colElement}>
            <div className={styles.textElement}>
              <h1>{dataUser?.name}</h1>
              <h3>{dataUser?.job}</h3>
            </div>
          </div>
        </Col>
        <Col xs={0} lg={8} md={0}>
          <div className={styles.colElement}>
            <div className={styles.linkElement}>
              <span> Services</span>
              <span> Portfolio</span>
              <span> ContactMe</span>
            </div>
          </div>
        </Col>
        <Col xs={24} lg={8}>
          <div className={styles.colElement}>
            <a href=" https://www.facebook.com/tannnguyen2962" target="_blank">
              <SVG src="/src/assets/svgs/facebook.svg" color="white" />
            </a>
            <a href="https://github.com/tannguyen2962" target="_blank ">
              <SVG src="/src/assets/svgs/github.svg" />
            </a>
            <a href="https://github.com/tannguyen2962">
              <SVG src="/src/assets/svgs/twitter.svg" />
            </a>
          </div>
        </Col>
      </Row>
      <div className={styles.textFooter}>
        <h3> From Hutech With Love</h3>{' '}
      </div>
    </div>
  );
};
export default Footer;
