import React from 'react'
import styled from "styled-components"

function SideBarOption() {
  return (
    <SideBarOptions>
       <h2>Channels</h2><h1>+</h1>
       <h2>Users</h2><h1>+</h1>
    </SideBarOptions>
  )
}

export default SideBarOption;

const SideBarOptions = styled.div`
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