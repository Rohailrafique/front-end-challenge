import React from 'react'
import styled from 'styled-components'
import SideBarOption from './SideBarOption';


function SideBar({title}) {
  return (
    <SideBarContainer>
        <SideBarHeader>
                <SideBarInfo>
                        <h2>Cohort name</h2>
                        <h3>username</h3>
                </SideBarInfo>
        </SideBarHeader>
    <SideBarOption />
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