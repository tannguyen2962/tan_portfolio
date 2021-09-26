import React from 'react';
import { Timeline, Tabs } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import SVG from 'react-inlinesvg';
import styles from './experience.less';

const { TabPane } = Tabs;

const Experience = () => {
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
              <p className={styles.content}>Create a services site</p>
              <div className={styles.datetime}>
                <SVG
                  src="/src/assets/svgs/calendar.svg"
                  width="20px"
                  height="20px"
                  fill="#c91f37"
                />
                <span>2015-09-01</span>
              </div>
            </div>
          </Timeline.Item>
          <Timeline.Item color="green">
            Solve initial network problems
            <div> 2015-09-01</div>
          </Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            Sed ut perspiciatis unde omnis iste natus error sit.
          </Timeline.Item>
          <Timeline.Item color="red">
            Network problems being solved
            <div> 2015-09-01</div>
          </Timeline.Item>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            Technical testing <div> 2015-09-01</div>
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
            <p> Create a services site </p>
            <div className={styles.datetime}>
              <SVG src="/src/assets/svgs/calendar.svg" width="20px" height="20px" fill="#c91f37" />
              <span> 2015-09-01</span>
            </div>
          </Timeline.Item>
          <Timeline.Item color="green">
            Solve initial network problems
            <div> 2015-09-01</div>
          </Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            Sed ut perspiciatis unde omnis iste natus error sit.
          </Timeline.Item>
          <Timeline.Item color="red">
            Network problems being solved
            <div> 2015-09-01</div>
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
