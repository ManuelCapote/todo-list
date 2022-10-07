import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import TodoList from './components/Todo-List'
import TodoForm from './components/Todo-Form'
import TodoFilter from './components/Todo-Filter'
import Todo from './interfaces/Todo'

import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      task: 'Deliver React assignment',
      completed: false,
    },
    {
      task: 'Go to the Gym',
      completed: true,
    },
    {
      task: 'Order Pizzas before 5pm',
      completed: false,
    },
  ])

  useEffect(() => {
    sortCompletedTask()
  }, [1])

  const addTask = (task: Todo) => {
    setTodos((prevTask) => [task, ...prevTask])
  }

  const completeTask = (index: number): void => {
    setTodos((prev) => {
      const newArray: Todo[] = [...prev]
      newArray[index].completed = true
      newArray.push(newArray.splice(index, 1)[0])
      return newArray
    })
  }

  const sortCompletedTask = () => {
    setTodos((prev) => {
      const newArray: Todo[] = [...prev]
      newArray.map((item, index) => {
        !item.completed || newArray.push(newArray.splice(index, 1)[0])
      })
      return newArray
    })
  }

  const deleteTask = (index: number) => {
    setTodos((prevTask) => [
      ...prevTask.slice(0, index),
      ...prevTask.slice(index + 1),
    ])
  }

  return (
    <div className='App'>
      <div className='todo-container'>
        <Header />
        <TodoFilter />
        <TodoList
          todoList={todos}
          deleteTask={deleteTask}
          onComplete={completeTask}
        />
        <TodoForm addTask={addTask} />
      </div>
    </div>
  )
}

export default App
