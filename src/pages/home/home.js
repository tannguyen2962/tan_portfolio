import React from 'react';
import { Button, Tooltip } from 'antd';
import SVG from 'react-inlinesvg';
import Portfolio from './portfolio/portfolio';
import Experience from './experience/experience';
import Services from './services/services';
import Footer from './footer/footer';
import Skills from './skill/skill';
import Intro from './intro/intro';
import About from './about/about';
import styles from './home.less';

const Home = () => (
  <div className={styles.home}>
    <Intro />
    <About />
    <Skills />
    <Experience />
    <Services />
    <Portfolio />
    <Footer />
    <div className={styles.buttonOnTop}>
      <Button type="primary" shape="circle">
        <a href="#navbar">
          <Tooltip title="prompt text">
            <SVG src="/src/assets/svgs/arrow-up.svg" />
          </Tooltip>
        </a>
      </Button>
    </div>
  </div>
);

export default Home;
