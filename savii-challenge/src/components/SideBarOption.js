import React from 'react'
import styled from "styled-components"

function SideBarOption() {
  return (
    <SideBarChannels>
        <span>#</span><h2>Channels</h2><h1>+</h1>
    </SideBarChannels>
  )
}

export default SideBarOption;

const SideBarChannels = styled.div`
    display: flex;
    font-size: 15px;
    align-items: center   ;
    padding-left: 20px;
    cursor: pointer;

    > h1 {
        align-items: center;
    }
`