import React from "react";
import styled from "styled-components";

function TopNav() {
  return (
    <Header>
      <h1>Slack Clone</h1>
    </Header>
  );
}

export default TopNav;

const Header = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  padding: 10 px 0;
  background-color: #4A154B	;
  border-bottom: 1px solid white;
  

  > h1 {
    margin-left: 600px;
    color: white;
  }
`;
