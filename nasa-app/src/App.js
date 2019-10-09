import React from 'react';
import './App.css';
import DailyPic from './Components/dailyPic';

class App extends React.Component {

  state = {
    data: []
  }

  fetchDailyPic () {
      const key = "Twc8x8c9cA57VmYOa3boYeqTce88Oig9md5mhjmC"
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
      .then(res => res.json())
      .then(data => this.setState({data: data}))
  }

  componentDidMount() { 
      this.fetchDailyPic()
  }

  render() {
      return (
          <div>
              <DailyPic photoData={this.state.data}/>
          </div>
      )
  }
}

export default App;
