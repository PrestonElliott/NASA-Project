import React from 'react'
import './App.css'
// import { Switch, Route, Link } from 'react-router-dom'

import DailyPic from './Components/dailyPic'
import EpicNasa from './Components/epicNasa'
import DateSelect from './Components/dateSelect'

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

export default class App extends React.Component {

	state = {
		dailyPic: {

		},
		epicPicsData: {},
		imgUrlArr: [],
		startDate: new Date(2015, 7, 20)	
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
	}

	// CONTINUE TO WORK ON THIS FETCH
	// Valid dateRange Values: "2015-06-13" through "2019-06-27"
	fetchEpicDate() {
		const key = process.env.REACT_APP_NASA_API_KEY
		
		let d = this.state.startDate
		let dateFormat = 
			d.getFullYear() 
			+ "-" + ("0" + (d.getMonth() + 1)).slice(-2) 
			+ "-" + ("0" + d.getDate()).slice(-2)
		console.log(dateFormat)

		fetch(`https://api.nasa.gov/EPIC/api/natural/date/${dateFormat}?api_key=${key}`)
		.then(res => res.json())
		.then(data => {
			if(this.state.data !== data.data) {
				this.setState({ ...this.state, epicPicsData: data }) 
				this.constructEpicImgUrl(data)
			}
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
	
	handleChange = (date) => { this.setState({ ...this.state, startDate: date }) }

	render() {
		console.log(this.state)
		return (
			<div>
			<DailyPic />
			{/* <DateSelect selected={this.state.startDate} onChange={this.handleChange}/>
			<EpicNasa imgUrlArr={this.state.imgUrlArr}  /> */}
			</div>
		)
	}
}