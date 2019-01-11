import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import honeyData from './honey/components/honeyData.json'
import HoneyIndex from './honey/components/HoneyIndex.js'
import HoneyShow from './honey/components/HoneyShow.js'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }

  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header subtitle="Find the best local honey" title="Honeypot" user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}
        
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
          <Route exact path='/honey' render={() => (
            <HoneyIndex honeyData={honeyData} />
          )} />

          <Route exact path='/honey/:id/show' render={({match}) => (
            <HoneyShow honeyData={honeyData} match={match} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
