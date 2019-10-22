import React from 'react'
import './App.css'
import { connect } from 'react-redux'

import DailyPic from './Components/dailyPic'
import EpicNasa from './Components/epicNasa'

class App extends React.Component {

	state = {
		epicPicsData: {}
	}

	fetchDailyPic () {
		const key = process.env.REACT_APP_NASA_API_KEY
		fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
		.then(res => res.json())
		.then(data => { this.props.dispatch({ type: "FETCH_DAILY_PIC", data: data }) })
	}

	fetchEpicAPI () {
		fetch(`https://epic.gsfc.nasa.gov/api/natural`)
		.then(res => res.json())
		.then(data => { this.setState({ epicPicsData: data }) })
	}

	componentDidMount() { 
		this.fetchDailyPic()
		this.fetchEpicAPI()
	}

	render() {
		return (
			<div>
				<DailyPic />
				<EpicNasa epicPicsData={this.state.epicPicsData} />
			</div>
		)
	}
}

export default connect()(App)


