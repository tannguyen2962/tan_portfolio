import { SettingOutlined } from '@ant-design/icons';
import { Row, Col, Menu } from 'antd';
import SVG from 'react-inlinesvg';
import React from 'react';
import SubMenu from 'antd/lib/menu/SubMenu';
import styles from './skills.less';

const Skills = () => {
  const item = [
    {
      title: 'UX UI',
      icon1: 'image.svg',
      option1: 'Photoshop',
      icon2: 'image.svg',
      option2: 'Adobe ',
    },
    {
      title: 'Front-End Developer',
      icon1: 'css3.svg',
      option1: 'HTML',
      icon2: 'html5.svg',
      option2: 'CSS',
    },
    {
      title: 'Front-End Developer',
      icon1: 'css3.svg',
      option1: 'HTML',
      icon2: 'html5.svg',
      option2: 'CSS',
    },
  ];
  return (
    <div className={styles.skillContent}>
      <div className={styles.title}>
        <h1> Skills</h1>
        <h3> My technical level </h3>
      </div>
      <Row className={styles.skills}>
        {item.map((value) => {
          return (
            <Col span={8} className={styles.colElement}>
              <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
              >
                <SubMenu
                  key="sub4"
                  icon={<SettingOutlined />}
                  title={value.title}
                  className={styles.item}
                >
                  <Menu.Item className={styles.selected} key="9">
                    <SVG src={`src/assets/svgs/${value.icon1} `} />
                    {value.option1}
                  </Menu.Item>
                  <Menu.Item className={styles.selected} key="10">
                    {' '}
                    <SVG src={`src/assets/svgs/${value.icon2} `} />
                    {value.option2}
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Skills;
