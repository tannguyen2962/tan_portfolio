import React from 'react';
import axios from 'axios';
import { Form, Input, Button, message } from 'antd';
import { useHistory } from 'react-router-dom';

import styles from './sign-up.less';

const SignUp = () => {
  const history = useHistory();
  const toSignIn = () => {
    history.push('/signIn');
  };

  const handleSubmit = (values) => {
    axios
      .post('https://614337aec8700e00178d01bb.mockapi.io/users', values)
      .then(() => {
        message.success('Sign up success');
        history.push('/signIn');
      })
      .catch((error) => {
        message.error(error);
      });
  };

  return (
    <div className={styles.signIn}>
      <Form onFinish={handleSubmit} layout="vertical">
        <div className={styles.form}>
          <div className={styles.title}>
            <h1>Sign Up</h1>
          </div>
          <Form.Item name="email" label="Email" rules={[{ required: true }, { type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name="renterPassword" label="Renter Password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name="fullName" label="Full Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <div className={styles.button}>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
              <Button type="primary" onClick={toSignIn}>
                Sign In
              </Button>
            </div>
          </Form.Item>
        </div>
      </Form>
      ;
    </div>
  );
};

export default SignUp;
