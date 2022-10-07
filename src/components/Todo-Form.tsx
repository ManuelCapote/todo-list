import { FormEvent, useState } from 'react'
import Todo from '../interfaces/Todo'
import './TodoForm.css'

interface Props {
  addTask: (task: Todo) => void
}

const TodoForm = ({ addTask }: Props) => {
  const [task, setTask] = useState('')
  const [completed, setCompleted] = useState(false)

  const handleForm = (e: FormEvent) => {
    e.preventDefault()

    addTask({ task, completed })
  }

  return (
    <div className='TodoForm'>
      <form onSubmit={(e) => handleForm(e)}>
        <label htmlFor='newTask'>Enter a new task:</label>
        <input
          type='text'
          id='newTask'
          name='newTask'
          placeholder='Add your to-do'
          onChange={(e) => setTask(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
