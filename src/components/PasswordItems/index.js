import './index.css'

const PasswordItems = props => {
  const {passwordItem, onDeletePasswordItem, showPasswordStatus} = props

  const {id, website, username, password, initialClassNameColor} = passwordItem

  const onClickDeletePasswordItem = () => {
    onDeletePasswordItem(id)
  }

  return (
    <li className="password-item">
      <div className={initialClassNameColor}>
        <p className="initial">{website[0].toUpperCase()}</p>
      </div>
      <div className="website-and-password-container">
        <p className="display-text">{website}</p>
        <p className="display-text">{username}</p>
        {showPasswordStatus ? (
          <p className="display-text">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-image"
          />
        )}
      </div>
      <div className="delete-container">
        <button
          type="button"
          className="delete-button"
          onClick={onClickDeletePasswordItem}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItems
