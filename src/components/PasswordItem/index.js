import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePasswordItem, showPasswordStatus} = props

  const {id, websiteInput, usernameInput, passwordInput} = passwordDetails

  const profileColors = [
    '#7683cb',
    '#f59e0b',
    '#10b981',
    '#f97316',
    '#14b8a6',
    ' #b91c1c',
    '#0ea5e9',
  ]

  const profileBackgroundColor = profileColors[Math.ceil(Math.random() * 7)]

  const removeItem = () => {
    deletePasswordItem(id)
  }

  const passwordPattern = showPasswordStatus ? (
    <p>{passwordInput}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-image"
    />
  )

  return (
    <li>
      <p
        className="initial-background"
        style={{backgroundColor: profileBackgroundColor}}
      >
        {websiteInput[0].toUpperCase()}
      </p>
      <div className="input-item-container">
        <p>{websiteInput}</p>
        <p>{usernameInput}</p>
        {passwordPattern}
      </div>
      <button
        type="button"
        className="delete-button-style"
        onClick={removeItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
