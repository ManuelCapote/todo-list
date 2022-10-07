import Todo from '../interfaces/Todo'
import TodoItem from './Todo-Item'
import './TodoList.css'

interface Props {
  todoList: Todo[]
  deleteTask: (index: number) => void
  onComplete: (index: number) => void
}

const TodoList = ({ todoList, deleteTask, onComplete }: Props) => {
  return (
    <div className='TodoList'>
      <ol>
        {todoList.map((todo, index) => {
          return (
            <li>
              <TodoItem
                todoItem={todo}
                deleteTask={() => deleteTask(index)}
                onComplete={() => onComplete(index)}
              />
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default TodoList
