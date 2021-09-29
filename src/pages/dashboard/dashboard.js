import React, { useEffect } from 'react';
import { Input, Button, Form, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { updateUser } from './dashboard.actions';
import styles from './dashboard.less';

const DashBoard = () => {
  const history = useHistory();
  const targetUser = JSON.parse(localStorage.getItem('targetUser'));
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state.dashboardReducer);

  useEffect(() => {
    if (user) {
      message.success(`${user.name} has been updated`);
      history.push('/');
    }
  }, [user]);

  const handleSubmit = (formValues) => {
    dispatch(updateUser(targetUser.id, formValues));
  };

  if (!targetUser) {
    history.push('/signIn');
    return null;
  }

  return (
    <div className={styles.dashboard}>
      <Form onFinish={handleSubmit} layout="vertical">
        <div className={styles.form}>
          <div className={styles.title}>
            <h1> DashBoard</h1>
          </div>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }, { type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name="des" label="Description" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="work" label="Work" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default DashBoard;
