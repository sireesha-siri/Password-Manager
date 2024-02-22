import {Component} from 'react'
import {v4 as uniqueId} from 'uuid'
import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordManagerList: [],
    searchInput: '',
    showPassword: false,
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onCheckChange = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  addPasswordMember = event => {
    event.preventDefault()

    const {websiteInput, usernameInput, passwordInput} = this.state

    const newPasswordMember = {
      id: uniqueId(),
      websiteInput,
      usernameInput,
      passwordInput,
    }

    this.setState(prev => ({
      passwordManagerList: [...prev.passwordManagerList, newPasswordMember],
      websiteInput: '',
      passwordInput: '',
      usernameInput: '',
    }))
  }

  deletePasswordItem = id => {
    const {passwordManagerList} = this.state
    this.setState({
      passwordManagerList: passwordManagerList.filter(each => each.id !== id),
    })
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      passwordManagerList,
      showPassword,
    } = this.state

    const filteredList = passwordManagerList.filter(each =>
      each.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo-image"
        />

        <div className="add-password-container">
          <div className="user-input-container">
            <h1 className="add-password-heading">Add New Password</h1>

            <form onSubmit={this.addPasswordMember}>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon-style"
                />

                <input
                  className="input-style"
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsiteInput}
                  value={websiteInput}
                />
              </div>

              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icon-style"
                />
                <input
                  type="text"
                  placeholder="Enter UserName"
                  onChange={this.onChangeUsernameInput}
                  value={usernameInput}
                  className="input-style"
                />
              </div>

              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icon-style"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.onChangePasswordInput}
                  value={passwordInput.toLowerCase()}
                  className="input-style"
                />
              </div>

              <div className="add-button-container">
                <button type="submit">Add</button>
              </div>
            </form>
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-image"
            />
          </div>
        </div>

        <div className="show-password-container">
          <div className="top-container">
            <div className="count-container">
              <h1 className="add-password-heading">Your Passwords</h1>
              <p className="count-display">{filteredList.length}</p>
            </div>

            <div className="search-box-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon-style"
              />
              <input
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                className="input-style"
              />
            </div>
          </div>

          <hr />

          <div className="bottom-container">
            <div className="check-box-container">
              <input
                type="checkbox"
                id="checkbox"
                className="check-box"
                onChange={this.onCheckChange}
              />
              <label htmlFor="checkbox">Show Passwords</label>
            </div>

            <div className="final-container">
              {filteredList.length !== 0 ? (
                <ul>
                  {filteredList.map(each => (
                    <PasswordItem
                      key={each.id}
                      passwordDetails={each}
                      showPasswordStatus={showPassword}
                      deletePasswordItem={this.deletePasswordItem}
                    />
                  ))}
                </ul>
              ) : (
                <div className="no-passwords-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="no-passwords-image"
                  />
                  <p className="add-password-heading">No Passwords</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
