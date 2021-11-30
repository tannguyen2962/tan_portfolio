import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from './sign-up.action';

import styles from './sign-up.less';

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isCreateUserSuccess } = useSelector((state) => state.signUpReducer);

  useEffect(() => {
    if (isCreateUserSuccess) {
      message.success('Sign Up Successfully');
      history.push('/signIn');
    }
  }, [isCreateUserSuccess]);

  const toSignIn = () => {
    history.push('/signIn');
  };

  const handleFormSubmit = (formValues) => {
    if (formValues.renterPassword !== formValues.password) {
      message.error('Renter Password is not correct');
      return;
    }

    if (!formValues.agreeWithThePrivacyPolicy) {
      message.error('You need to agree with privacy policy');
      return;
    }

    dispatch(createUser(formValues));
  };

  return (
    <div className={styles.signIn}>
      <Form onFinish={handleFormSubmit} layout="vertical">
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
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="username" label="User Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="agreeWithThePrivacyPolicy" valuePropName="checked">
            <Checkbox>
              <span> I agree to the Privacy Policy</span>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <div className={styles.button}>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
              <Button type="default" onClick={toSignIn}>
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
