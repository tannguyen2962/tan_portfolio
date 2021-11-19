import React, { useEffect } from 'react';
import { Input, Button, Form, message, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './sign-in.actions';
import styles from './sign-in.less';

const SignIn = () => {
  const history = useHistory();
  const toSignUp = () => {
    history.push('/signUp');
  };
  const dispatch = useDispatch();
  const { dataUsers } = useSelector((state) => state.signInReducer);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleSubmit = (formValues) => {
    const { email, password } = formValues;

    const targetUser = dataUsers.find((user) => user.email === email && user.password === password);

    if (targetUser) {
      message.success('Login success');
      history.push('/dashboard');
      localStorage.setItem('targetUser', JSON.stringify(targetUser));
    } else {
      message.error('Login Failed');
    }
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
          <Checkbox>
            {' '}
            <span> I agree to the Privacy Policy</span>
          </Checkbox>
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
