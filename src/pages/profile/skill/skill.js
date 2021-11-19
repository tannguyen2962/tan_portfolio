import { SettingOutlined } from '@ant-design/icons';
import { Row, Col, Menu } from 'antd';
import SVG from 'react-inlinesvg';
import React from 'react';
import SubMenu from 'antd/lib/menu/SubMenu';
import styles from './skills.less';

const Skills = () => {
  const skills = [
    {
      title: 'UX UI',
      icon1: 'photoshop.svg',
      option1: 'Photoshop',
      icon2: 'premier.svg',
      option2: 'Adobe Premier ',
      icon3: 'illustrator.svg',
      option3: 'Adobe Illustrator ',
    },
    {
      title: 'Front-End Developer',
      icon1: 'css-3.svg',
      option1: 'CSS',
      icon2: 'html.svg',
      option2: 'HTML',
      icon3: 'atom.svg',
      option3: 'React',
    },
    {
      title: 'Branding Design',
      icon1: 'teamwork.svg',
      option1: 'Organization',
      icon2: 'prioritize.svg',
      option2: 'Prioritization',
    },
  ];

  return (
    <div className={styles.skillContent} id="skills">
      <div className={styles.title}>
        <h1> Skills</h1>
        <h3> My technical level </h3>
      </div>
      <Row className={styles.skills}>
        {skills.map((value) => {
          return (
            <Col key={value.title} xs={24} md={24} lg={8} xl={8} className={styles.colElement}>
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
                  <Menu.Item key="9">
                    <div className={styles.selected}>
                      <SVG src={`src/assets/svgs/${value.icon1} `} width="30px" height="30px" />
                      {value.option1}
                    </div>
                  </Menu.Item>
                  <Menu.Item key="10">
                    <div className={styles.selected}>
                      {' '}
                      <SVG src={`src/assets/svgs/${value.icon2} `} width="30px" height="30px" />
                      {value.option2}
                    </div>
                  </Menu.Item>
                  <Menu.Item key="11">
                    <div className={styles.selected}>
                      {' '}
                      <SVG src={`src/assets/svgs/${value.icon3} `} width="30px" height="30px" />
                      {value.option3}
                    </div>
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
