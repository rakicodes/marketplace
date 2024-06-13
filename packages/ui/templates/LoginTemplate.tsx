import React from 'react'
import CenteredContentContainer from './container/CenteredContentContainer'
import LoginForm from '../organisms/LoginForm'
import { ILoginForm } from '../types/props'

const LoginTemplate = ({ email, password, onChangeEmail, onChangePassword, onSubmit }: ILoginForm) => {
  return (
    <CenteredContentContainer>
        <div className="flex flex-col p-10 w-full md:w-80 md:p-8 gap-y-10 bg-white rounded">
            <div>
                <h1 className="text-2xl font-bold">Login</h1>
                <p className="text-sm">Start selling today!</p>
            </div>
            <LoginForm email={email} password={password} onChangeEmail={onChangeEmail} onChangePassword={onChangePassword} onSubmit={onSubmit}/>
        </div>
    </CenteredContentContainer>
)
}

export default LoginTemplate