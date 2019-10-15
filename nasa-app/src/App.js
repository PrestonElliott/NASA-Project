import React from 'react'
import './App.css'
import DailyPic from './Components/dailyPic'
import EpicNasa from './Components/epicNasa'

class App extends React.Component {

	state = {
		dailyPic: {
			date: "",
			explanation: "",
			hdurl: "",
			media_type: "",
			service_version: "",
			title: "",
			url: ""
		},
		epicData: {}
	}


	// REFACTOR FETCHES INTO THEIR OWN COMPONENT AND IMPORT
	// MAY NEED TO CALL FUNCTIONS WITHOUT THIS WITHIN APP
	fetchDailyPic () {
		const key = "Twc8x8c9cA57VmYOa3boYeqTce88Oig9md5mhjmC"
		fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
		.then(res => res.json())
		.then(data => {
			// console.log(data)
			this.setState({ dailyPic: data })
		})
	}

	fetchEPICAPI () {
		// SAMPLE FETCH FORMAT TO DISPLAY IMAGE
		// https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png
		fetch(`https://epic.gsfc.nasa.gov/api/natural`)
		.then(res => res.json())
		.then(data => {
			this.setState({ epicData: data })
			console.log(this.state)
		})
	}

	componentDidMount() { 
		this.fetchDailyPic()
		this.fetchEPICAPI()
	}

	render() {
		return (
			<div>
				<DailyPic dailyPic={this.state.dailyPic} />
				<EpicNasa epicData={this.state.epicData} />
			</div>
		)
	}
}

export default App;


