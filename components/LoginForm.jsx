import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="login-form-wrapper">
      <div className="login-form-container">
        <div className="login-form-header">
          <UserOutlined style={{ fontSize: "50px" }} />
          <h2>Sign In</h2>
        </div>
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email Address!",
              },
              {
                pattern: /^\S+@\S+\.\S+$/i,
                message: "Please enter valid email address!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Email Address"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <div className="login-form-section">
              <a href="/reset-password">Forgot password?</a>
            </div>
          </Form.Item>
        </Form>
        <div className="login-form-footer">
          Don't have an account?
          <a href="/register">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
