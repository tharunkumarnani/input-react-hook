// Write your code here
import {useState} from 'react'
import {
  MainBg,
  Card,
  Heading,
  Para,
  UserInput,
  ErrMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [pass, setPass] = useState('')
  const updatePassword = event => {
    setPass(event.target.value)
  }

  const isPassStrong = pass.length >= 8

  return (
    <MainBg>
      <Card>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <UserInput value={pass} onChange={updatePassword} type="password" />
        {!isPassStrong && (
          <ErrMsg>Your password must be at least 8 characters</ErrMsg>
        )}
      </Card>
    </MainBg>
  )
}

export default PasswordValidator
