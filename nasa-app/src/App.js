import React from 'react'
import './App.css'
import { connect } from 'react-redux'

import DailyPic from './Components/dailyPic'
import EpicNasa from './Components/epicNasa'

class App extends React.Component {

	// state = {
	// 	dailyPic: {
	// 		date: "",
	// 		explanation: "",
	// 		hdurl: "",
	// 		media_type: "",
	// 		service_version: "",
	// 		title: "",
	// 		url: ""
	// 	},
	// 	epicPhotoData: {}
	// }

	fetchDailyPic () {
		const key = process.env.REACT_APP_NASA_API_KEY
		fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
		.then(res => res.json())
		.then(data => {
			this.props.dispatch({ type: "FETCH_DAILY_PIC", data: data })
			// this.setState({ dailyPic: data })
		})
	}

	fetchEPICAPI () {
		// SAMPLE FETCH FORMAT TO DISPLAY IMAGE
		// https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png
		fetch(`https://epic.gsfc.nasa.gov/api/natural`)
		.then(res => res.json())
		.then(data => {
			this.setState({ epicPhotoData: data })
			console.log(this.state)
		})
	}

	componentDidMount() { 
		this.fetchDailyPic()
		// this.fetchEPICAPI()
	}

	render() {
		return (
			<div>
				<DailyPic />
				{/* <EpicNasa epicPhotoData={this.state.epicPhotoData} /> */}
			</div>
		)
	}
}

let mapStateToProps = state => ({ dailyPicReducer: state.dailyPicReducer.dailyPic })
export default connect(mapStateToProps)(App);


