import './index.css'
import { Form, Button, Input, Dialog} from 'antd-mobile';


const Login = () => {
  const initialValues={
    username: 'admin',
    password: 12345
  }

  const [form] = Form.useForm()
  const onSubmit = () => {
    const values = form.getFieldsValue()
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    })
  }

  return (
  <div className="login">
    <Form 
      form={form} 
      layout='horizontal' mode='card' 
      initialValues={initialValues}
      footer={
          <Button block color='primary' onClick={onSubmit} size='large'>
            提交
          </Button>
        }>
        <Form.Item label='用户名' name='username'>
          <Input placeholder='请输入用户名' clearable/>
        </Form.Item>
        <Form.Item label='密码' name='password'>
          <Input placeholder='请输入密码' clearable type='password'/>
        </Form.Item>
    </Form>
    </div>
  );
}

export default Login;
