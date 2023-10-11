import React from 'react'
import '../styles/RegisterStyles.css'
import { Form, Input } from 'antd'
import { Link } from 'react-router-dom';
const Register = () => {
  const onFinishHandler=(values)=>{
    console.log(values)
  }
  return (
    <>
    <div className='form-container'>
      <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
        <h3>Register Form</h3>
        <Form.Item label="Name" name="name">
          <Input type="text" required/>
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" required/>
        </Form.Item>
        <Form.Item label="password" name="password">
          <Input type="password" required/>
        </Form.Item>
        <button className='btn btn-success m-1' type='submit'>Register</button>
        <Link className='btn btn-danger' to='/login'>Already have a account</Link>
      </Form>
      </div>
    </>
  )
}

export default Register