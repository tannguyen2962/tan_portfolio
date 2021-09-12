import React, { useState } from 'react';
import { Input, Tooltip, Checkbox, Button, message } from 'antd';
import { InfoCircleOutlined, QuestionCircleFilled, UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import styles from './sign-up.less';

const SignUp = () => {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    localStorage.setItem('userName', userName);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    message.info('sign up success');
    history.push('/signIn');
  };

  return (
    <div className={styles.center}>
      <div className={styles.signIn}>
        <h2> Hello friends</h2>
        <Input
          onChange={(event) => setUserName(event.target.value)}
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
        <Input
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your gmail"
          type="gmail"
          prefix={<QuestionCircleFilled className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        <div className={styles.checkbox}>
          <Checkbox>I agree to</Checkbox>
        </div>
        <div className={styles.button}>
          <Button onClick={signUp} type="primary" shape="round" size={30}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
