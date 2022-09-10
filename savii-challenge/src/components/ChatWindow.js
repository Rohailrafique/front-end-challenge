import React from 'react'
import styled from "styled-components"

function ChatWindow() {
  return (
    <ChatWindowContainer>
      <h1>ChatWindow</h1>
      
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



