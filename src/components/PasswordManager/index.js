import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItems from '../PasswordItems'

import './index.css'

const initialBackGroundColors = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
]

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordsList: [],
    showPassword: false,
    searchInput: '',
  }

  onClickShowPasswordCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onDeletePasswordItem = id => {
    const {passwordsList} = this.state

    const filteredList = passwordsList.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState({passwordsList: filteredList})
  }

  onChangeGivenSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeGivenWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeGivenUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangeGivenUsername = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSubmitGivenDetails = event => {
    event.preventDefault()

    const {websiteInput, usernameInput, passwordInput} = this.state

    const initialClassName = `initial-container ${
      initialBackGroundColors[
        Math.ceil(Math.random() * initialBackGroundColors.length - 1)
      ]
    }`

    const newPassWordList = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
      initialClassNameColor: initialClassName,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassWordList],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  getFilteredPasswordsList = () => {
    const {passwordsList, searchInput} = this.state

    return passwordsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  render() {
    const {showPassword, searchInput} = this.state

    const filteredPasswordsList = this.getFilteredPasswordsList()

    return (
      <div className="app-container">
        <div className="main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="password-creations-container">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="password-manager-lg-img"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="password-manager-image"
              />
            </picture>
            <div className="form-container">
              <form className="form" onSubmit={this.onSubmitGivenDetails}>
                <h1 className="password-heading">Add New Password</h1>
                <div className="input-and-logo-container">
                  <div className="logo-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="logo"
                    />
                  </div>
                  <input
                    type="text"
                    className="input-container"
                    placeholder="Enter Website"
                    onChange={this.onChangeGivenWebsite}
                  />
                </div>
                <div className="input-and-logo-container">
                  <div className="logo-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt=" username"
                      className="logo"
                    />
                  </div>
                  <input
                    type="text"
                    className="input-container"
                    placeholder="Enter Username"
                    onChange={this.onChangeGivenUsername}
                  />
                </div>
                <div className="input-and-logo-container">
                  <div className="logo-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="logo"
                    />
                  </div>
                  <input
                    type="password"
                    className="input-container"
                    placeholder="Enter Password"
                    onChange={this.onChangeGivenPassword}
                  />
                </div>
                <div cl assName="button-container">
                  <button type="submit" className="add-button">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="below-container">
            <div className="passwords-count-search-container">
              <div className="container">
                <div className="passwords-count-container">
                  <h1 className="your-password-heading">Your Passwords</h1>
                </div>
                <div className="count-container">
                  <p className="count">{filteredPasswordsList.length}</p>
                </div>
              </div>
              <div className="search-main-container">
                <div className="search-icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt=" search"
                    className="search-icon"
                  />
                </div>
                <input
                  className="search-input-container"
                  type="search"
                  value={searchInput}
                  onChange={this.onChangeGivenSearchInput}
                  placeholder="Search"
                />
              </div>
            </div>
            <hr className="hr" />
            <div className="show-password-container">
              <input
                type="checkbox"
                className="checkbox"
                checked={showPassword}
                onChange={this.onClickShowPasswordCheckbox}
                id="show password"
              />
              <label className="show-password" htmlFor="show password">
                Show passwords
              </label>
            </div>
            <ul className="passwords-created-list-container">
              {filteredPasswordsList.length !== 0 ? (
                filteredPasswordsList.map(eachPassword => (
                  <PasswordItems
                    key={eachPassword.id}
                    passwordItem={eachPassword}
                    onDeletePasswordItem={this.onDeletePasswordItem}
                    showPasswordStatus={showPassword}
                  />
                ))
              ) : (
                <>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                    alt="no passwords"
                    className="password-manager-image"
                  />
                  <p className="no-password-heading">No Passwords</p>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
