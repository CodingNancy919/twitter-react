import './index.css'
import { Form, Button, Input, Dialog} from 'antd-mobile';
import { loginService } from '../../services/login';


const Login = () => {
  const initialValues={
    username: 'admin',
    password: 12345
  }

  const [form] = Form.useForm()
  const onSubmit = async() => {
    const values = form.getFieldsValue()
    console.log(values)
    const res = await loginService(values.username, values.password);
    console.log(res)
    if(res && res.length > 0){
      Dialog.alert({
        content: JSON.stringify(res),
      });
      return;
    }
    Dialog.alert({
      content: '登录失败',
    });
  };

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
