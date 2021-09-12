import React, { useState } from 'react';
import { Input, Tooltip, Checkbox, Button } from 'antd';
import { InfoCircleOutlined, QuestionCircleFilled, UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import styles from './sign-in.less';

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const localEmail = localStorage.getItem('email');
    const localPassword = localStorage.getItem('password');

    if (email === localEmail && password === localPassword) {
      alert('login success');
      history.push('/');
    } else {
      alert('login failed');
    }
  };
  const signUp = () => {
    history.push('/signUp');
  };

  return (
    <div className={styles.center}>
      <div className={styles.signIn}>
        <h2> Hello friends</h2>
        <Input
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />

        <Input
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          type="password"
          prefix={<QuestionCircleFilled className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        <div className={styles.checkbox}>
          <Checkbox /> I read and agree to{' '}
        </div>
        <div className={styles.button}>
          <Button onClick={login} type="primary" shape="round">
            Login
          </Button>
          <Button onClick={signUp} type="primary" shape="round">
            SignUp
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
