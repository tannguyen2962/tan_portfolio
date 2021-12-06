import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Image } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { mockApiUrl } from 'common/constants';
import styles from './about.less';

const About = () => {
  const [dataAbout, setDataAbout] = useState();
  const localTarget = localStorage.getItem('targetUser');
  const targetUser = JSON.parse(localTarget);
  useEffect(() => {
    axios.get(`${mockApiUrl}/users`).then((response) => {
      setDataAbout(response.data);
    });
  }, []);

  const selectedUser = dataAbout?.find((user) => user.id === targetUser.id);

  return (
    <div>
      <Row id="aboutMe" className={styles.about}>
        <Col xs={24}>
          <div className={styles.textCenter}>
            <div className={styles.title}>
              <h1>About</h1>
              <h2> Me </h2>
            </div>
            <h3>My introduce </h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={12}>
          <div className={styles.aboutLeft}>
            <div>
              <Image width={300} height={300} src={selectedUser?.imageAboutMe} />
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className={styles.aboutRight}>
            <p>{selectedUser?.description}</p>
            <div className={styles.flex}>
              <div className={styles.experience}>
                <span> 02+</span>
                <div>{selectedUser?.experience1}</div>
              </div>
              <div className={styles.experience}>
                <span> 01+</span>
                <div>
                  <div>{selectedUser?.experience2}</div>
                </div>
              </div>
              <div className={styles.experience}>
                <span> 03+</span>
                <div>
                  <div>{selectedUser?.experience3}</div>
                </div>
              </div>
            </div>
            <div className={styles.btnDownload}>
              <Button type="primary" icon={<DownloadOutlined />}>
                <a href="/text.txt" alt="Download">
                  Download
                </a>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default About;
