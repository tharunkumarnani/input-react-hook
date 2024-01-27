// Style your elements here
import styled from 'styled-components'

export const MainBg = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #383a4e;
  border-radius: 10px;
  box-shadow: #434451 0px 0px 5px 0px;
  font-family: Roboto;
  color: #ffffff;
  padding: 20px;
  padding-bottom: 30px;
`

export const Heading = styled.h1`
  font-size: 35px;
  margin-bottom: 7px;
  font-family: Roboto;
`
export const Para = styled.p`
  font-size: 12px;
  margin-top: 0;
`
export const UserInput = styled.input`
  border: 0;
  background-color: #ffffff;
  padding: 7px;
  font-size: 20px;
  outline: none;
  margin-top: 12px;
  width: 90%;
  font-weight: 600;
`
export const ErrMsg = styled.p`
  color: #ef4444;
  font-size: 11px;
`
