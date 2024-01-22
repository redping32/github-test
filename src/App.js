import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import Progress from './components/진척도';
import './App.css';
import { useState,useRef,useCallback } from 'react';

function createBulkTodos(){
  const array=[];
  for (let i = 1; i<=2500;i++){
    array.push({
      id:i,
      text:`to do ${i}`,
      checked:false
    })
  }
  return array;
}
const App =()=>{
  const [todos,setTodos]= useState(
    createBulkTodos)
  const nextId=useRef(3);
  const onInsert=useCallback(
    text=>{
      const todo={
        id:nextId.current,
        text,
        checked:false,
      };
      setTodos(todos=>todos.concat(todo));
      nextId.current+=1;//nextId 1씩더하기
    },
    [todos]
  );
  
  const onRemove=useCallback(
    id=>{
      setTodos(todos=>todos.filter(todo=>todo.id!==id));
    },
    [todos]
  );
  const onToggle=useCallback(
    id=>{
      setTodos(todos=>todos.map(todo=>
        todo.id===id?{ ...todo,checked:!todo.checked}:todo,
    ),);
    },
    [todos]
  )
  return (
  <>
    <Progress todos={todos}/>
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  </>);
}

export default App;
