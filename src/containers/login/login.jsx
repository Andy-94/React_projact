import React,{Component} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'
import {createDemo1Action,createDemo2Action} from '../../redux/actions/test_action'
import logo from './imgs/favicon.ico'
import './css/login.less'


class Login extends Component{
  render(){
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
      alert('your enroll now')
    };
    return (
      <div className="login">
        <header>
          <img src={logo} alt="logo"/>
          <h1>Product Management System {this.props.testlogin}</h1>
        </header>
        <section>
          <h1>User Enroll</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="#paw">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="#reg">register now!</a>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}
export default connect(
  state => ({testlogin:state.test}),
  {
    demo1:createDemo1Action,
    demo2:createDemo2Action
  }
)(Login)