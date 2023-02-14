import React from 'react';
import { useSelector } from 'react-redux';


const TodoList = () => {

  const {users} = useSelector((state) => state)  

  console.log(users);
  
  return (
    <div>
      FOoods
    </div>
  )
}

export default TodoList