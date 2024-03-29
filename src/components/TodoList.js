import TodoListItem from "./TodoListItem";
import './TodoList.scss';
import { useCallback } from "react";
import { List } from "../../node_modules/react-virtualized/dist/commonjs/index";

const TodoList =({todos,onRemove,onToggle})=>{
    const rowRenderer=useCallback(({index,key,style})=>{
        const todo = todos[index];
        return(
            <TodoListItem
              todo={todo}
              key={key}
              onRemove={onRemove}
              onToggle={onToggle}
              style={style}/>
        );
    },[onRemove,onToggle,todos])
    return(
    <List
      classname="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{outline:'none'}}
      >
    </List>);
}
export default TodoList;