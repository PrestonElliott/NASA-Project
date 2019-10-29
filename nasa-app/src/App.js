import React from 'react'
// import { Switch, Route, Link } from 'react-router-dom'
import './App.css'

import DailyPic from './Components/dailyPic'
import EpicNasa from './Components/epicNasa'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class App extends React.Component {

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
		epicPicsData: {},
		imgUrlArr: [],
		startDate: new Date(2015, 5, 20)	
	}

	fetchDailyPic () {
		const key = process.env.REACT_APP_NASA_API_KEY
		fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
		.then(res => res.json())
		.then(data => { this.setState({ ...this.state, dailyPic: data }) })
	}

	componentDidMount() { 
		this.fetchDailyPic()
		this.fetchEpicDate()
		// this.fetchEpicApi()
	}

	// CONTINUE TO WORK ON THIS FETCH
	// dateRange: "2015-06-13" through "2019-06-27"
	fetchEpicDate() {
		const key = process.env.REACT_APP_NASA_API_KEY
		
		let date = this.state.startDate
		let dateFormat = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2)

		console.log(dateFormat)

		fetch(`https://api.nasa.gov/EPIC/api/natural/date/${dateFormat}?api_key=${key}`)
		.then(res => res.json())
		.then(data => {
			this.setState({ ...this.state, epicPicsData: data }) 
			this.constructEpicImgUrl(data)
		})
	}

	constructEpicImgUrl = (epicPicsData) => {
		epicPicsData.forEach(epic => {
			
			let dateFormat = ""
			let img = ""
	
			dateFormat = epic.date.split(" ")[0].replace("-", "/").replace("-", "/")
			img = epic.image

			let newImgUrl = (`https://epic.gsfc.nasa.gov/archive/natural/${dateFormat}/png/${img}.png`) 
			this.setState({ ...this.state, imgUrlArr: [...this.state.imgUrlArr, newImgUrl ] })
		})
	}
	
	handleChange = date => {
		this.setState({
		  startDate: date,
		})
	}

	render() {
		console.log(this.state)
		return (
			<div>
			<DailyPic dailyPic={this.state.dailyPic}/>
			<DatePicker selected={this.state.date} onChange={this.handleChange} onSelect={this.handleSelect} />
			<EpicNasa imgUrlArr={this.state.imgUrlArr}  />
				{/* <Switch>
					<Route path='/home' render={() => < DailyPic dailyPic={this.state.dailyPic} />} />
					<Route path='/' render={() => <Redirect to='/home'/>}  />
					<DailyPic dailyPic={this.state.dailyPic} />
					<EpicNasa imgUrlArr={this.state.imgUrlArr} />
				</Switch> */}
			</div>
		)
	}
}

// export default connect()(App)

// REPLACED THIS FETCH WITH DYNAMIC DATE FETCH
// fetchEpicApi () {
// 	fetch(`https://epic.gsfc.nasa.gov/api/natural`)
// 	.then(res => res.json())
// 	.then(data => { 
		// this.setState({ ...this.state, epicPicsData: data }) 
		// this.constructEpicImgUrl(data)
// 	})
// }