import React, { Component } from 'react'
import PersonalData from './components/PersonalData'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.fetchPersonalData = this.fetchPersonalData.bind(this)

    this.state = {
      person: '',
      loading: true,
    }
  }

  async fetchPersonalData () {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      this.setState({
        loading:false,
        person: data.results,
      })
  }

  componentDidMount() {
    this.fetchPersonalData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const limitAge = 50;
    if (nextState.person[0].dob.age > limitAge) {
      alert('Older than 50')
      return false;
    }
    return true
  }

  render() {
    const { person, loading } = this.state
    const loadingElement = <div className='loading'>Loading... Please, wait.</div>
    return (
      <main>
        <h1>Random Personal Data</h1>
        {
          loading ? loadingElement : (
            person.map((info) => {
              const {title, first, last} = info.name
              return <PersonalData
              key={info.login.md5}
              name={`Name: ${title}. ${first} ${last}`}
              email={info.email}
              age={info.dob.age}
              picture={info.picture.large}
              />
            })
        )
        }
      </main>
    )
  }
}

export default App;
