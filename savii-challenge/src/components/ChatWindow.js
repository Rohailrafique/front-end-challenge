import React from "react";
import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";
import { useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function ChatWindow() {

  const selectedChannel = useSelector((state) => state.channels.selectedChannel.payload);
  
  console.log(selectedChannel)

  return (
    
    <ChatWindowContainer>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>{selectedChannel?.name}</strong>
          </h4>
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoIcon /> Details
          </p>
        </HeaderRight>
      </Header>
      {
        selectedChannel && selectedChannel.messages.map((message) => (
          <ChatWindowMessages>

            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <MessageInfo>
                <h4>
                  <span>date</span>
                  <p>{message}</p>
                </h4>
              </MessageInfo>
            </Stack>
          </ChatWindowMessages>
        ))

      }
    </ChatWindowContainer>
   
   
  );
}

export default ChatWindow;

const ChatWindowMessages = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`
const MessageInfo = styled.div`
  padding-left: 10px;

  >h4 >span{
    color: gray;
    font-weight:300;
    margin=left: 4px;
    font-size:10px
  }
`

const ChatWindowContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
display: flex;
align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
  }
`;
const HeaderRight = styled.div`
display: flex;
align-items: center;
`;
