import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button type="button" className="login-btn" onClick={logout}>
      Logout
    </button>
  )
}

export default Logout
