import React from "react";
import PropTypes from "prop-types";
import { Collapse } from "antd";

const CustomCollapse = ({items}) => {
  const onChange = () => {
  };

  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default CustomCollapse;


CustomCollapse.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
  key: PropTypes.string.isRequired,
  label: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.string.isRequired),
  })).isRequired,
}
