import { FC, useCallback } from "react"
import {Button, Form, Input} from "antd"
import FormItem from "antd/es/form/FormItem"
import {LoginPage} from "./style"

const Login: FC = () => {
  const Login = useCallback(() => {

  }, [])
  return (
    <LoginPage>
      <Form >
        <FormItem label="账号">
          <Input style={{width: 200}}/>
        </FormItem>
        <FormItem label="密码">
          <Input style={{width: 200}}/>
        </FormItem>
        <Button onClick={Login} className="login-btn">登录</Button>
        
      </Form>
    </LoginPage>
  )
}

export default Login