import React from 'react';
import './App.css';
import DailyPic from './Components/dailyPic';

class App extends React.Component {

  state = {
    data: {
        date: "",
        explanation: "",
        hdurl: "",
        media_type: "",
        service_version: "",
        title: "",
        url: ""
    }
  }

  fetchDailyPic () {
      const key = "Twc8x8c9cA57VmYOa3boYeqTce88Oig9md5mhjmC"
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
      .then(res => res.json())
      .then(data => {console.log(data)
       this.setState({data: data})
    })
  }

  componentDidMount() { 
      this.fetchDailyPic()
  }

  render() {
      return (
          <div>
              <DailyPic data={this.state.data}/>
          </div>
      )
  }
}

export default App;
