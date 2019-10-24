import React from 'react'
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
		imgUrlArr: []
	}

	componentDidMount() { 
		this.fetchDailyPic()
		this.fetchEpicApi()
	}

	fetchDailyPic () {
		const key = process.env.REACT_APP_NASA_API_KEY
		fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
		.then(res => res.json())
		.then(data => { this.setState({ ...this.state, dailyPic: data }) })
	}

	fetchEpicApi () {
		fetch(`https://epic.gsfc.nasa.gov/api/natural`)
		.then(res => res.json())
		.then(data => { 
			this.setState({ ...this.state, epicPicsData: data }) 
			this.constructEpicImgUrl(data)
		})
	}

	constructEpicImgUrl = (epicPicsData) => {
		epicPicsData.map(image => {
			
			let dateFormat = ""
			let img = ""
	
			dateFormat = image.date.split(" ")[0].replace("-", "/").replace("-", "/")
			img = image.image
	
			fetch(`https://epic.gsfc.nasa.gov/archive/natural/${dateFormat}/png/${img}.png`)
			.then(res => res.json())
			.then(res =>  { this.setState({ ...this.state, imgUrlArr: res.push() }) 
			})
		})
    }

	render() {
		console.log(this.state)
		return (
			<div>
				<DailyPic dailyPic={this.state.dailyPic} />
				<EpicNasa imgUrlArr={this.state.imgUrlArr} />
			</div>
		)
	}
}

// export default connect()(App)


