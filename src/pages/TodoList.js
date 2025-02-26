import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import {Table,Tooltip} from 'antd';
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import {deleteTodo} from '../redux/actions';

const StyledTable = styled(Table)`
  width:500px;
  padding-top:20px;
`;

const StyledClosed = styled(CloseOutlined)`
  padding-left:10px;
  font-size:20px;
  cursor:pointer;
`;

const TodoList = ({TotalTodos,deleteMyTodo}) => {
  
  let dataSource = [];
  if(TotalTodos.length>0)
    dataSource = TotalTodos;

  const columns = [
    {
      title: 'To Do',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      key:'id',
      render: (_, record) => {
        return (
          <Tooltip title="Delete">
            <StyledClosed onClick={() => deleteMyTodo(record.id)} />
          </Tooltip>
        )
      }
    }
  ];

  return (
    <StyledTable dataSource={dataSource} columns={columns} locale={{ emptyText: 'No records found' }} />
  )
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    deleteMyTodo: deleteTodo,
  },
  dispatch,
);

export default connect(null, mapDispatchToProps)(TodoList);