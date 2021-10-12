import React, { useEffect } from 'react';
import { Form, Input, Button, message, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postUser } from './sign-up.action';

import styles from './sign-up.less';

const SignUp = () => {
  const history = useHistory();
  const toSignIn = () => {
    history.push('/signIn');
  };

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.signUpReducer);

  useEffect(() => {
    if (user) {
      message.success(`${user.fullName} Sign Up Success`);
      history.push('/signIn');
    }
  }, [user]);

  const handleSubmit = (values) => {
    dispatch(postUser(values));
  };

  return (
    <div className={styles.signIn}>
      <Form onFinish={handleSubmit} layout="vertical">
        <div className={styles.form}>
          <div className={styles.title}>
            <h1>Sign Up</h1>
            <h3> Create a new account</h3>
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
          <Checkbox>
            {' '}
            <span> I agree to the Privacy Policy</span>
          </Checkbox>
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
