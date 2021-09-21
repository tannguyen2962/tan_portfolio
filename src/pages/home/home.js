import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import SVG from 'react-inlinesvg';
import axios from 'axios';
import Navbar from './navbar/navbar';
import Portfolio from './portfolio/portfolio';
import Experience from './experience/experience';
import Services from './services/services';
import Footer from './footer/footer';
import Skills from './skill/skill';
import Intro from './intro/intro';
import About from './about/about';
import styles from './home.less';

const Home = () => {
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    axios.get('https://614337aec8700e00178d01bb.mockapi.io/users/1').then((response) => {
      setDataUser(response.data);
    });
  }, []);

  return (
    <>
      <div className={styles.home}>
        <Navbar />
        <Intro dataUser={dataUser} />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Portfolio />
        <Footer />
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
