import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const Dashboard = () => {
  return (
    <Wrapper>
      <Header />
      <WrapperContent>
        <Sidebar />
        <Main />
      </WrapperContent>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div``;

const WrapperContent = styled.div`
  display: flex;
`;
