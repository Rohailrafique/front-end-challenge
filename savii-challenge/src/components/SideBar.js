import React from 'react'
import styled from 'styled-components'


function SideBar() {
  return (
    <SideBarContainer>
        <SideBarHeader>
                <SideBarInfo>
                        <h2>Username</h2>
                </SideBarInfo>
        </SideBarHeader>

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

const SideBarInfo = styled.div`
`