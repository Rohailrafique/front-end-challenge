import React from "react";
import SideBar from "./SideBar";
import ChatWindow from "./ChatWindow";
import styled from "styled-components";

function Home() {
  return (
    <HomeBody>
      <SideBar></SideBar>
      <ChatWindow></ChatWindow>
    </HomeBody>
  );
}

export default Home;

const HomeBody = styled.div`
  display: flex;
  height: 100vh;
`;
