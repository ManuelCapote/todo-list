import Todo from '../interfaces/Todo'
import './TodoItem.css'

interface Props {
  todoItem: Todo
  deleteTask: () => void
  onComplete: () => void
}

const TodoItem = ({ todoItem, deleteTask, onComplete }: Props) => {
  return (
    <div className='TodoItem'>
      {!todoItem.completed && (
        <button className='completeBtn' onClick={onComplete}>
          Complete
        </button>
      )}
      <p className={todoItem.completed ? 'completed' : ''}>{todoItem.task}</p>
      <button className='close' onClick={deleteTask}>
        ✖
      </button>
    </div>
  )
}

export default TodoItem
