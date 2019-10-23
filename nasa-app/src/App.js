import React from 'react'
import './App.css'
import { connect } from 'react-redux'

import DailyPic from './Components/dailyPic'
import EpicNasa from './Components/epicNasa'

class App extends React.Component {

	state = {
		epicPicsData: {},
		imgUrlArr: []
	}

	fetchDailyPic () {
		const key = process.env.REACT_APP_NASA_API_KEY
		fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
		.then(res => res.json())
		.then(data => { this.props.dispatch({ type: "FETCH_DAILY_PIC", data: data }) })
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
			.then(res =>  {
				this.setState({ ...this.state, imgUrlArr: res.push() }) 
			})
		})
    }

	componentDidMount() { 
		this.fetchDailyPic()
		this.fetchEpicApi()
	}

	render() {
		console.log(this.state)
		return (
			<div>
				<DailyPic />
				<EpicNasa imgUrlArr={this.state.imgUrlArr} />
			</div>
		)
	}
}

export default connect()(App)


