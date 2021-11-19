import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
import { getUsers } from './profile.actions';

import styles from './profile.less';

const Profile = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const profileSelector = useSelector((state) => state.profileReducer.users);

  const targetUser = profileSelector?.find((user) => user.username === username);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {profileSelector?.isLoading && <h1>{username} Loading....</h1>}
      <div className={styles.home}>
        <Navbar />
        <Intro dataUser={targetUser} />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Portfolio />
        <Footer dataUser={targetUser} />
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

export default Profile;
