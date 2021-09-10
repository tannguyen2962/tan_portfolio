import React from 'react';
import { Timeline, Tabs } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import SVG from 'react-inlinesvg';
import styles from './experience.less';

const { TabPane } = Tabs;

const Experience = () => {
  return (
    <div>
      <div className={styles.textCenter}>
        {' '}
        <h1>Qualification</h1>
        <h3>My Personal Journey</h3>
        {' '}
      </div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Education" key="1">
          <Timeline mode="alternate">
            <Timeline.Item>
              Create a services site
              <div className={styles.center}>
                <SVG
                  src="/src/assets/svgs/calendar.svg"
                  width="20px"
                  height="20px"
                  fill="#c91f37"
                />
                2015-09-01
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
              Technical testing
              {' '}
              <div> 2015-09-01</div>
            </Timeline.Item>
          </Timeline>
        </TabPane>
        <TabPane
          tab={`${(
            <SVG src="/src/assets/svgs/calendar.svg" width="20px" height="20px" fill="#c91f37" />
          )} Work`}
          key="2"
        >
          <Timeline mode="alternate">
            <Timeline.Item>
              Create a services site
              <div className={styles.center}>
                <SVG
                  src="/src/assets/svgs/calendar.svg"
                  width="20px"
                  height="20px"
                  fill="#c91f37"
                />
                2015-09-01
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
      </Tabs>
    </div>

  //
  );
};
export default Experience;
