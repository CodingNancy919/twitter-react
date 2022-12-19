import { Form, Button, Input, Dialog} from 'antd-mobile';
import Header from '@components/Header';
import DatePickerInput from '@components/DatePickerInput';
import style from'./index.module.scss'
import { useState } from 'react';


//定义常量 方便做改动
const ACCOUNT_TYPE = {
   TEL:'TEL',
   EMAIL:'EMAIL',
};

/*
Register Page
*/
const Register = () => {
   const [formData, setFormData] = useState({
      name: '1234',
      tel:'',
      email:'',
      birthday:'',
   })

   const [accountType, setAccountType]=useState(ACCOUNT_TYPE.TEL);

   const onAccountTypeChange = (e) =>{
      console.log(e);
      if(accountType === ACCOUNT_TYPE.TEL){
         setAccountType(ACCOUNT_TYPE.EMAIL);
         return;
      }
      setAccountType(ACCOUNT_TYPE.TEL);
   }

   return (<div>
      <Header/>
      <div className={style.form}>
         <div className={style.formTitle}>创建你的账号</div>
         <Form initialValues={formData} className={style.formContainer}>
            <Form.Item name='name'>
               <Input placeholder='名字' className={style.input}/>
            </Form.Item>
               {accountType === ACCOUNT_TYPE.TEL && 
               <Form.Item name='tel'>
                  <Input placeholder='手机' className={style.input}/>
               </Form.Item>}
               {accountType === ACCOUNT_TYPE.EMAIL && 
               <Form.Item name='email'><Input placeholder='邮箱' className={style.input}/>
               </Form.Item>}
            <div className={style.changeTypeButton} onClick={onAccountTypeChange}>
               {accountType === ACCOUNT_TYPE.TEL ? '改用电子邮件' : '改用手机号码'}
            </div>
            <div className={style.birthdayTitle} >出生日期</div>
            <div>这不会公开显示。确认你自己的年龄，即使此帐号适用于业务、宠物、或</div>
            <Form.Item>
               <DatePickerInput name='birthday'/>
            </Form.Item>
         </Form>
      </div>
      <div className={style.footer}>
         <Button className={style.footerButton}>下一步</Button>
      </div>
   </div>)
}


export default Register;