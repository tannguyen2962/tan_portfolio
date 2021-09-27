import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import SVG from 'react-inlinesvg';

import Navbar from './navbar/navbar';
import Portfolio from './portfolio/portfolio';
import Experience from './experience/experience';
import Services from './services/services';
import Footer from './footer/footer';
import Skills from './skill/skill';
import Intro from './intro/intro';
import About from './about/about';
import { getUser } from './home.actions';
import styles from './home.less';

const Home = () => {
  const dispatch = useDispatch();
  const homeSelector = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getUser(1));
  }, []);

  return (
    <>
      {homeSelector.isLoading && <h1>Loading....</h1>}
      <div className={styles.home}>
        <Navbar />
        <Intro dataUser={homeSelector.user} />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Portfolio />
        <Footer dataUser={homeSelector.user} />
        <div className={styles.buttonOnTop}>
          <Button type="primary" shape="circle">
            <a href="#intro">
              <SVG src="/src/assets/svgs/arrow-up.svg" />
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
