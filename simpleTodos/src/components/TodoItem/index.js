import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props

  const {title, id} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-item">
      <p className="todos-item">{title}</p>
      <button className="delete-btn" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
