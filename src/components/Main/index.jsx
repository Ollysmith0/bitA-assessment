import React, { useState } from "react";
import styled from "styled-components";
import Card from "../Card";
import debounce from "../../utils";

const Main = () => {
  const [value, setValue] = useState("");
  const [ticket, setTicket] = useState([]);

  return (
    <Wrapper>
      <Content>
        <Title>DASHBOARD</Title>
        <div>
          <Input
            placeholder="New list"
            value={value}
            onChange={(e) => debounce(setValue(e.target.value), 500)}
          />
          <Button
            // eslint-disable-next-line consistent-return
            onClick={() => {
              if (value.length) {
                setValue("");
                setTicket([
                  ...ticket,
                  {
                    id: `${Math.random()} - ${value}`,
                    name: value,
                  },
                ]);
              } else {
                return false;
              }
            }}
          >
            Create
          </Button>
        </div>
      </Content>
      <CardWrapper>
        {ticket.length > 0 &&
          ticket.map((item) => {
            return <Card ticket={item.name} key={item.id} />;
          })}
      </CardWrapper>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;

  background-color: #e6e6e6;
`;

const CardWrapper = styled.div`
  max-width: 50%;
  display: flex;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-weight: 700;
  color: red;
`;

const Input = styled.input`
  width: 200px;
  margin-right: 1rem;
  border: 1px solid black;
  background-color: #fff;
  padding: 0.5rem;

  &::placeholder {
    font-style: italic;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: red;
  color: #fff;

  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover {
    background-color: white;
    color: red;
  }
`;
