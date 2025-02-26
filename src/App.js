import { connect } from 'react-redux';
import AddTodo from "./pages/AddTodo";
import TodoList from "./pages/TodoList";
import styled from "styled-components";
import {getTodoList} from './redux/selector';

const StyledDiv = styled.div`
  padding:0 0 0 30px;
`;

function App({getTodos}) {

  return (
    <StyledDiv>
      <h2>Todo Application</h2>
      <AddTodo TotalTodos={getTodos} />
      <TodoList TotalTodos={getTodos} />
    </StyledDiv>
  );
}

const mapStateToProps = state => ({
  getTodos: getTodoList(state),
  });

export default connect(mapStateToProps,)(App);