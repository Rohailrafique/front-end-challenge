import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addNewChannel, deleteChannels } from "../redux/channels";
import { deleteUsers } from "../redux/mockUser";
import { useState } from "react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { DeleteForever } from "@mui/icons-material";

function SideBar() {
  const [channelArrowClicked, setChannelArrowClicked] = useState(false);
  const [directMessagesArrowClicked, setDirectMessagesArrowClicked] = useState(false);
  const listOfChannels = useSelector((state) => state.channels.channelsList);
  const mockUsers = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const addChannels = () => {
    const channelName = prompt("enter channel name");
    if (channelName) {
      dispatch(addNewChannel({ name: channelName }));
    }
  };

  const expandChannels = () => {
    setChannelArrowClicked(!channelArrowClicked);
  };

  const directMessagesClicked = () => {
    setDirectMessagesArrowClicked(!directMessagesArrowClicked);
  };

  const selectChannel = (id) => {
      //push id to store
      
  }

  const selectUser = () => {  
    //push user id to store
  }


  return (
    <SideBarContainer>
      <SideBarOption>
        <h2 onClick={expandChannels}>
          <ArrowCircleDownIcon />
        </h2>
        <h2>Channels</h2>
        <h1 onClick={addChannels}>
          <AddCircleIcon />
        </h1>
      </SideBarOption>

      {channelArrowClicked
        ? listOfChannels.map(({ name, id }, index) => {
            return (
              <SideBarOption>
                <div key={index}>
                  <h3 onClick={selectChannel(id)}>{name}</h3>
                  <p onClick={() => dispatch(deleteChannels(index))}>
                    <DeleteForever />
                  </p>
                </div>
              </SideBarOption>
            );
          })
        : null}

      <hr />
      <SideBarOption>
        <h2 onClick={directMessagesClicked}>
          <ArrowCircleDownIcon />
        </h2>
        <h2>Direct Messages</h2>
      </SideBarOption>
      {directMessagesArrowClicked
        ? mockUsers.usersList.map(({ name, id }, index) => {
            return (
              <SideBarOption>
                <div key={id}>
                  <h3 onClick={selectUser}>{name}</h3>
                  <h3 onClick={() => dispatch(deleteUsers(index))}>
                    <DeleteForever />
                  </h3>
                </div>
              </SideBarOption>
            );
          })
        : null}
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
  margin-top: 76px;
`;

const SideBarOption = styled.div`
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
