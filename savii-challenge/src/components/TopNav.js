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
  background-color: black;
  border-bottom: 10px;

  > h1 {
    color: gray;
  }
`;
