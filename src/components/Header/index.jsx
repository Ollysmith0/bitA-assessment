import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import logoBitA from "../../img/logo-bitA.png";

const Header = () => {
  return (
    <Wrapper>
      <img src={logoBitA} alt="logo-bitA" />
      <AiOutlineMenu />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  height: 4rem;
  padding: 0 2rem;
  background-color: white;
  border-bottom: 1px solid #cacaca;
`;
