import React from 'react'

function TodoList(props) {
    return (
        <div id="todo-list">
            <ul>
                {props.listItems.map(function(item, index){
                    return <li className='todo-item' key={index}>
                        {item}
                        <button className='todo-complete' onClick={() => {props.removeTodo(index)}}>Complete</button>
                    </li>
                })}
            </ul>
        </div>
    );
}

  
  export default TodoList;
  