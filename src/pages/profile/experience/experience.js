import React, { useState, useEffect } from 'react';
import { Timeline, Tabs } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import axios from 'axios';
import { mockApiUrl } from 'common/constants';
import SVG from 'react-inlinesvg';
import styles from './experience.less';

const { TabPane } = Tabs;

const Experience = () => {
  const [dataExperience, setDataExperience] = useState();
  const localTarget = localStorage.getItem('targetUser');
  const targetUser = JSON.parse(localTarget);
  useEffect(() => {
    axios.get(`${mockApiUrl}/users`).then((response) => {
      setDataExperience(response.data);
    });
  }, []);

  const selectedUser = dataExperience?.find((user) => user.id === targetUser.id);
  const renderEducation = () => {
    const tabTitle = (
      <div className={styles.tabTitle}>
        <SVG src="/src/assets/svgs/calendar.svg" width="20px" height="20px" fill="#c91f37" />
        <span>Education</span>
      </div>
    );

    return (
      <TabPane tab={tabTitle} key="1" className={styles.education}>
        <Timeline mode="alternate">
          <Timeline.Item>
            <div className={styles.milestone}>
              <h3 className={styles.content}>{selectedUser?.education}</h3>
              <div className={styles.datetime}>
                <SVG
                  src="/src/assets/svgs/calendar.svg"
                  width="20px"
                  height="20px"
                  fill="#c91f37"
                />
                <span>{selectedUser?.timeofeducation}</span>
              </div>
            </div>
          </Timeline.Item>
          <Timeline.Item color="green">
            <h3> {selectedUser?.education2}</h3>
            <div> {selectedUser?.timeofeducation2}</div>
          </Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            <h3> {selectedUser?.education3}</h3>
            <div> {selectedUser?.timeofeducation3}</div>
          </Timeline.Item>
        </Timeline>
      </TabPane>
    );
  };

  const renderWork = () => {
    const tabTitle = (
      <div className={styles.tabTitle}>
        <SVG src="/src/assets/svgs/calendar.svg" width="20px" height="20px" fill="#c91f37" />
        <span>Work</span>
      </div>
    );

    return (
      <TabPane tab={tabTitle} key="2" className={styles.work}>
        <Timeline mode="alternate">
          <Timeline.Item>
            <h3> {selectedUser?.work1} </h3>
            <div className={styles.datetime}>
              <SVG src="/src/assets/svgs/calendar.svg" width="20px" height="20px" fill="#c91f37" />
              <span> {selectedUser?.timeofwork}</span>
            </div>
          </Timeline.Item>
          <Timeline.Item color="green">
            <h3> {selectedUser?.work2}</h3>
            <div> {selectedUser?.timeofwork}</div>
          </Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            <h3> {selectedUser?.work3}</h3>
            <div> {selectedUser?.timeofwork3}</div>
          </Timeline.Item>
        </Timeline>
      </TabPane>
    );
  };

  return (
    <div className={styles.experience}>
      <div className={styles.header}>
        <h1>Qualification</h1>
        <h3>My Personal Journey</h3>
      </div>
      <Tabs defaultActiveKey="1" className={styles.tabs} centered>
        {renderEducation()}
        {renderWork()}
      </Tabs>
    </div>
  );
};
export default Experience;
