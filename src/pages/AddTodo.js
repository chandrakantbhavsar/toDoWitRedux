import React, { useState } from "react";
import { Input,Tooltip } from "antd";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import {addTodos} from '../redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

const StyledInput = styled(Input)`
  width: 200px;
  vertical-align: top;
`;

const StyledPlus = styled(PlusOutlined)`
  padding-left:10px;
  padding-top: 3px;
  font-size:25px;
  cursor:pointer;
`;

const AddTodo = ({addTodos,TotalTodos}) => {
  const [myTodo, setmyTodo] = useState("");
  

  const insertTodo = () => {
    if (myTodo !== '' && !TotalTodos.some(todo => todo.name === myTodo)) {
      addTodos(myTodo);
    }
    setmyTodo("");
  };

  return (
    <>
      <StyledInput 
          placeholder="Add ToDos" 
          value={myTodo} 
          onChange={(e) => setmyTodo(e.target.value)} 
      />
      <Tooltip title="Add">
        <StyledPlus onClick={insertTodo} />
      </Tooltip>
    </>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addTodos: addTodos,
  },
  dispatch,
);

export default connect(null, mapDispatchToProps)(AddTodo);