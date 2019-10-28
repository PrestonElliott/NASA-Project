import React from 'react'
// import { Switch, Route, Link } from 'react-router-dom'
import './App.css'

import DailyPic from './Components/dailyPic'
import EpicNasa from './Components/epicNasa'

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
	// dateRange: ["2015-06-13", "2019-06-27"]
	fetchEpicDate() {
		const key = process.env.REACT_APP_NASA_API_KEY
		let date = "2019-06-01"
		fetch(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${key}`)
		.then(res => res.json())
		.then(data => {
			this.setState({ ...this.state, epicPicsData: data }) 
			this.constructEpicImgUrl(data)
		})
	}

	// REPLACED THIS FETCH WITH DYNAMIC DATE FETCH
	// fetchEpicApi () {
	// 	fetch(`https://epic.gsfc.nasa.gov/api/natural`)
	// 	.then(res => res.json())
	// 	.then(data => { 
			// this.setState({ ...this.state, epicPicsData: data }) 
			// this.constructEpicImgUrl(data)
	// 	})
	// }

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

	render() {
		console.log(this.state)
		return (
			<div>
			<DailyPic dailyPic={this.state.dailyPic}/>
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


