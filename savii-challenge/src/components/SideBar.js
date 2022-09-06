import React from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux"
import {increment} from "../redux/channels"

function SideBar() {
    const {channel} = useSelector((state) => state.channels)
    const dispatch = useDispatch()

   
    // const showChannels = () => {}

    const addChannels = () => {
        const channelName = prompt("enter channel name")

        if(channelName) {
            //add to list of channels to render
        }

    }

        const showUsers = () => {

        }

  return ( 
    <SideBarContainer>
        <SideBarHeader>
                <SideBarHeaderInfo>
                        <h2>Cohort name</h2>
                        <h3>username</h3>
                </SideBarHeaderInfo>
        </SideBarHeader>
        <SideBarChannelOption><h2 onClick={() => dispatch(increment())}>Channels {channel}</h2><h1 onClick={addChannels}>+</h1>
      </SideBarChannelOption>
      <hr/>
        <SideBarUsersOption> <h2 onClick={showUsers}>direct messages</h2></SideBarUsersOption>
        <hr/>
    </SideBarContainer>
  )
}

export default SideBar;

const SideBarContainer = styled.div`
  background-color: purple;
  color: white;
  flex: 0.3;
  border-top: 1px solid white;
  max-width: 260px;
  margin-top: 60px

`

const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid white;
    padding: 13px;
`

const SideBarHeaderInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 20px;
        font-weight: 400;
    }

    > h3 {
        display: flex;
        font-size: 15px;
        font-weight: 400;
        align-items: center;
    }
`

const SideBarChannelOption = styled.div`
display: flex;
    font-size: 15px;
    align-items: center   ;
    padding-left: 20px;
    cursor: pointer;

    :hover {
        opacity: 0.9
    }

    > h1 {
        margin-left: 100px;
    }

`

const SideBarUsersOption = styled.div`
display: flex;
    font-size: 15px;
    align-items: center   ;
    padding-left: 20px;
    cursor: pointer;

    :hover {
        opacity: 0.9
    }

    > h1 {
        margin-left:140px;
    }
`
