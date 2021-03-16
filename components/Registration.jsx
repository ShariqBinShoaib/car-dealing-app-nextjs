import React from "react";
import { Form, Input, Tooltip, Select, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 12,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="wrapper">
      <div className="registration-form-container">
        <Form
          // {...formItemLayout}
          form={form}
          name="register"
          size="large"
          layout="vertical"
          onFinish={onFinish}
          scrollToFirstError
        >
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Form.Item
                name="firstName"
                label="First Name"
                className="mb-3"
                rules={[
                  {
                    required: true,
                    message: "Please enter your First Name!",
                  },
                ]}
              >
                <Input placeholder="Enter your first name" />
              </Form.Item>
            </div>
            <div className="col-md-6 col-sm-12">
              <Form.Item
                name="lastName"
                label="Last Name"
                className="mb-3"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Last Name!",
                  },
                ]}
              >
                <Input placeholder="Enter your last name" />
              </Form.Item>
            </div>
          </div>
          <Form.Item
            name="email"
            className="mb-3"
            label={
              <span>
                Email Address&nbsp;
                <Tooltip title="It will be shown with every vehicle you will post">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[
              {
                type: "email",
                message: "Please enter valid email address",
              },
              {
                required: true,
                message: "Please enter your Email Address",
              },
            ]}
          >
            <Input placeholder="example@domain.com" />
          </Form.Item>
          <Form.Item
            name="phone"
            className="mb-3"
            label={
              <span>
                Phone No&nbsp;
                <Tooltip title="It will be shown with every vehicle you will post">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[
              {
                required: true,
                message: "Please enter your phone number!",
              },
            ]}
          >
            <Input placeholder="03XX-XXXXXXX" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            className="mb-3"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            className="mb-3"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  console.log(rule);
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject("Passwords did not match!");
                },
              }),
            ]}
          >
            <Input.Password placeholder="Enter password again to confirm" />
          </Form.Item>
          <div className="mx-auto w-100">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationForm;
