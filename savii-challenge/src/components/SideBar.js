import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addNewChannel , deleteChannels} from "../redux/channels";
import { useState } from "react";
// import ChannelOption from "./ChannelOption";

function SideBar() {
  const [channelArrowClicked, setChannelArrowClicked] = useState(false);
  const listOfChannels = useSelector((state) => state.channels.channelsList);
  const mockUser = useSelector((state) => state.user)
  const dispatch = useDispatch();

  console.log(mockUser)

  const addChannels = () => {
    const channelName = prompt("enter channel name");
    if (channelName) {
      dispatch(addNewChannel({name: channelName}));
    }
  };
  
  const expandChannels = () => {
    setChannelArrowClicked(!channelArrowClicked);
  };

  return (
    <SideBarContainer>
      <SideBarChannelOption>
        <h2 onClick={expandChannels}>⬇️</h2>
        <h2>Channels</h2>
        <h1 onClick={addChannels}>+</h1>
      </SideBarChannelOption>
      {channelArrowClicked
        ? listOfChannels.map(({name}, index) => {
            return <div key={index}><h3>{name}</h3> <h3 
            onClick={() => dispatch(deleteChannels(index))}
            >
              -</h3> </div>;
          })
        : null}
      <hr />
      <SideBarUsersOption>
        <h2>Direct messages</h2>
      </SideBarUsersOption>
      <SideBarUsersOption>
        <h2>{mockUser.name}</h2>
      </SideBarUsersOption>
      <hr />
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.div`
  background-color: gray;
  color: white;
  flex: 0.3;
  border-top: 1px solid white;
  max-width: 260px;
  margin-top: 60px;
`;

const SideBarChannelOption = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  > h1 {
    margin-left: 90px;
  }
`;

const SideBarUsersOption = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  > h1 {
    margin-left: 140px;
  }
`;
