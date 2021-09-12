import React from 'react';

import Portfolio from './portfolio/portfolio';
import Experience from './experience/experience';
import Services from './services/services';
import Testimonial from './testimonial/testimonial';
import Intro from './intro/intro';
import About from './about/about';
import styles from './home.less';

const Home = () => (
  <div className={styles.home}>
    <Intro />
    <About />

    <Experience />
    <Services />
    <Portfolio />
    <Testimonial />
  </div>
);

export default Home;
