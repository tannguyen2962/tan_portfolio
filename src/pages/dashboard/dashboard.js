import React, { useEffect } from 'react';

import { Input, Button, Form, message, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateUser } from './dashboard.actions';

import styles from './dashboard.less';

const DashBoard = () => {
  const { TabPane } = Tabs;
  const history = useHistory();
  const pureTargetUser = localStorage.getItem('targetUser');
  const targetUser = JSON.parse(pureTargetUser);
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state.dashboardReducer);

  useEffect(() => {
    if (user) {
      message.success(`${user.name} has been updated`);
      history.push(`${user.username}`);
    }
  }, [user]);

  const handleSubmitUserProfile = (formValues) => {
    dispatch(updateUser(targetUser.id, formValues));
    localStorage.setItem(
      'targetUser',
      JSON.stringify({
        ...targetUser,
        ...formValues,
      })
    );
  };
  const handleSubmitAboutMe = (formValues) => {
    dispatch(updateUser(targetUser.id, formValues));
    localStorage.setItem(
      'targetUser',
      JSON.stringify({
        ...targetUser,
        ...formValues,
      })
    );
  };
  const handleSubmitEducationWork = (formValues) => {
    dispatch(updateUser(targetUser.id, formValues));
    localStorage.setItem(
      'targetUser',
      JSON.stringify({
        ...targetUser,
        ...formValues,
      })
    );
  };

  if (!targetUser) {
    history.push('/signIn');
    return null;
  }

  const renderUserProfile = () => {
    return (
      <div className={styles.dashboard}>
        <Form onFinish={handleSubmitUserProfile} layout="vertical" initialValues={targetUser}>
          <div className={styles.form}>
            <div className={styles.title}>
              <h1> User Profile</h1>
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
            <Form.Item name="job" label="Job" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="username" label="User Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="imageUrl" label="ImageUrl" rules={[{ required: true }]}>
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

  const renderEducationWork = () => {
    // const { timeofeducation2, ...restProps } = targetUser;

    // if (!timeofeducation2) {
    //   message.error('value not found');
    // } else {
    //   const initialValues = {
    //     ...restProps,
    //     timeofeducation2: [moment(timeofeducation2[0]), moment(timeofeducation2[1])],
    //   };
    //   return initialValues;
    // }

    return (
      <div className={styles.backgroundFormEducationWork}>
        <div className={styles.educationWork}>
          <div className={styles.titleFormEducationWork}>
            <h1>Education Work</h1>
          </div>
          <Form onFinish={handleSubmitEducationWork} layout="vertical" initialValues={targetUser}>
            <Form.Item name="education" label="Education" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="timeofeducation"
              label="Time of Education"
              rules={[{ required: true }]}
            >
              <Input placeholder="dd/mm/yyyy" />
            </Form.Item>
            <Form.Item name="education2" label="Education 2" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="timeofeducation2"
              label="Time of Education 2"
              rules={[{ required: true }]}
            >
              <Input placeholder="dd/mm/yyyy" />
            </Form.Item>
            <Form.Item name="education3" label="Education 3" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="timeofeducation3"
              label="Time of Education 3"
              rules={[{ required: true }]}
            >
              <Input placeholder="dd/mm/yyyy" />
            </Form.Item>
            <Form.Item name="work1" label="Work 1" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="timeofwork" label="Time of Work" rules={[{ required: true }]}>
              <Input placeholder="dd/mm/yyyy" />
            </Form.Item>
            <Form.Item name="work2" label="Work 2" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="timeofwork2" label="Time of Work 2" rules={[{ required: true }]}>
              <Input placeholder="dd/mm/yyyy" />
            </Form.Item>
            <Form.Item name="work3" label="Work 3" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="timeofwork3" label="Time of Work 3" rules={[{ required: true }]}>
              <Input placeholder="dd/mm/yyyy" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  };
  const renderAboutMe = () => {
    return (
      <div className={styles.backgroundFormAbout}>
        <div className={styles.formAboutMe}>
          <div className={styles.titleAboutMe}>
            <h1>About Me</h1>
          </div>
          <Form onFinish={handleSubmitAboutMe} layout="vertical" initialValues={targetUser}>
            <Form.Item name="description" label="Description" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="experience1" label="Experience" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="experience2" label="Experience" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="experience3" label="Experience" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="imageAboutMe" label="Image About Me" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="User Profile" key="1">
        {renderUserProfile()}
      </TabPane>
      <TabPane tab="About Me" key="2">
        {renderAboutMe()}
      </TabPane>
      <TabPane tab="Education  Work" key="3">
        {renderEducationWork()}
      </TabPane>
    </Tabs>
  );
};
export default DashBoard;
