import React, { useState } from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import debounce from "../../utils";

const Card = ({ ticket }) => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const handleInputChange = (e) => {
    debounce(setValue(e.target.value), 500);
  };

  const handleInputKeyDown = (e) => {
    if (e.code === "Enter") {
      setItems([
        ...items,
        {
          id: `${Math.random()} - ${value}`,
          name: value,
          done: false,
        },
      ]);

      setValue("");
    }

    if (e.code === "Escape") {
      setShowInput(false);
    }
  };

  const handleSetTaskDone = (e, id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  };

  if (ticket) {
    return (
      <Wrapper>
        <Header>
          <CustomTitle>{ticket}</CustomTitle>
          <Button onClick={() => setShowInput(true)}>+</Button>
        </Header>
        <Content>
          {showInput ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Input
                value={value}
                placeholder="New Item"
                onChange={(e) => handleInputChange(e)}
                onKeyDown={(e) => handleInputKeyDown(e)}
              />
            </div>
          ) : null}
          {items.map((item) => {
            return (
              <Line key={item.id}>
                <div>
                  <Checkbox
                    indeterminate={item.done}
                    onChange={(e) => handleSetTaskDone(e, item.id)}
                    value={item.done}
                  />
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: "5px",
                      textDecorationLine: item.done ? "line-through" : "",
                    }}
                  >
                    {item.name}
                  </span>
                </div>
                <ButtonClose
                  onClick={() =>
                    setItems(items.filter((i) => i.name !== item.name))
                  }
                >
                  <AiOutlineClose />
                </ButtonClose>
              </Line>
            );
          })}
        </Content>
      </Wrapper>
    );
  }

  return null;
};

export default Card;

Card.propTypes = {
  ticket: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-right: 1rem;
  width: 200px;
  height: 250px;
  background: white;
`;

const Header = styled.div`
  height: 50px;
  background-color: red;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CustomTitle = styled.h5`
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
`;

const Content = styled.div`
  background-color: #fff;
  padding-bottom: 1rem;
`;

const Button = styled.button`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;

  display: flex;
  align-items: center;
`;

const ButtonClose = styled.button`
  color: black;
  font-weight: 700;

  display: flex;
  align-items: center;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1rem;

  .ant-checkbox:hover {
    .ant-checkbox-inner {
      border: 1px solid grey;
    }
  }

  .ant-checkbox-wrapper:hover {
    .ant-checkbox-inner {
      background-color: initial !important;
      border: 1px solid #d9d9d9 !important;
    }

    .ant-checkbox-checked {
      &::after {
        border: 0 !important;
      }

      .ant-checkbox-inner {
        &:after {
          border-color: #d9d9d9;
        }
      }
    }
  }

  .ant-checkbox-inner {
    border-radius: 0;
  }

  .ant-checkbox-inner::after {
    background-color: grey;
  }
`;

const Input = styled.input`
  width: 150px;
  margin-right: 1rem;
  border: 1px solid black;
  background-color: #fff;
  padding: 0.5rem;

  &::placeholder {
    font-style: italic;
  }
`;
