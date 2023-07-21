import React from "react";
import styled from 'styled-components';
import CustomCollapse from "../CustomCollapse";

const texts = [
  "item children 1",
  "item children 2",
  "item children 3",
  "item children 4",
  "item children 5",
];

const items = [
  {
    key: "1",
    label: "item parent",
    children: texts.map((item) => <a href="/" style={{ display: 'block', color: '#000', marginLeft: '1rem' }} key={item}>{item}</a>),
  },
  {
    key: "2",
    label: "item parent",
    children: texts.map((item) =>  <a href="/" style={{ display: 'block', color: '#000', marginLeft: '1rem' }} key={item}>{item}</a>),
  },
  {
    key: "3",
    label: "item parent",
    children: texts.map((item) =>  <a href="/" style={{ display: 'block', color: '#000', marginLeft: '1rem' }} key={item}>{item}</a>),
  },
];

const Sidebar = () => {
  return <Wrapper>
    <CustomCollapse items={items} />
  </Wrapper>;
};

export default Sidebar;

const Wrapper = styled.div`
  width: 200px;
  height: 100vh;

  & > .ant-collapse {
    border: none;
    border-right: 1px solid #d9d9d9;
    border-radius: 0;
    height: 100%;

    & > .ant-collapse-item {
      border-radius: 0;
    }
  }
`
