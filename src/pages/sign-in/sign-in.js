import React from 'react';
import { Input, Button, Form, message } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styles from './sign-in.less';

const SignIn = () => {
  const history = useHistory();
  const toSignUp = () => {
    history.push('/signUp');
  };
  const handleSubmit = (value) => {
    axios.get('https://614337aec8700e00178d01bb.mockapi.io/users').then((response) => {
      const { email, password } = value;

      const targetUser = response.data.find(
        (user) => user.email === email && user.password === password
      );

      if (targetUser) {
        message.success('success');
        history.push('/dashboard');
        localStorage.setItem('targetUser', JSON.stringify(targetUser));
      } else {
        message.error('failed');
      }
    });
  };

  return (
    <div className={styles.signIn}>
      <Form onFinish={handleSubmit} layout="vertical">
        <div className={styles.form}>
          <div className={styles.title}>
            <h1> Sign In</h1>
          </div>
          <Form.Item name="email" label="Email" rule={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" rule={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <div className={styles.button}>
              <Button type="primary" htmlType="submit">
                Sign In
              </Button>
              <Button type="primary" onClick={toSignUp}>
                Sign Up
              </Button>
            </div>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
export default SignIn;
