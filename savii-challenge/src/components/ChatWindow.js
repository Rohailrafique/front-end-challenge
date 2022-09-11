import React from 'react'
import styled from "styled-components"
import InfoIcon from '@mui/icons-material/Info';

function ChatWindow() {
  return (
    <ChatWindowContainer>
      <Header>
     
      <HeaderLeft>
        <h4><strong>username</strong></h4>
      </HeaderLeft>

      <HeaderRight>
        <p>
          <InfoIcon/> Details
        </p>
      </HeaderRight>
      
      </Header>
      
    </ChatWindowContainer>
  )
}

export default ChatWindow;

const ChatWindowContainer = styled.div`
      flex: 0.7;
      flex-grow: 1;
      overflow-y:scroll;
      margin-top: 60px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`
const HeaderLeft = styled.div`
>h4{
  display: flex;
  text-transform: lowercase;
}`
const HeaderRight = styled.div`
`



