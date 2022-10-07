import './TodoFilter.css'

const TodoFilter = () => {
  return (
    <div className='TodoFilter'>
      <input
        type='search'
        name='filter'
        id='filter'
        placeholder='Filter your todos'
      />
    </div>
  )
}

export default TodoFilter
