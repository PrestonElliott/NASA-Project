import React from 'react'
import { Image } from 'react-bootstrap'

export default class DailyPic extends React.Component {

    state = {
		dailyPic: {}
	}

	fetchDailyPic () {
		fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
		.then(res => res.json())
		.then(data => { this.setState({ ...this.state, dailyPic: data }) })
	}

	componentDidMount() { 
		this.fetchDailyPic()
	}
    
    render() {
        return (
            <div>
                <h2 id="daily-pic-title">{this.state.dailyPic.title}</h2>
                <p>{this.state.dailyPic.explanation}</p>
                <Image id="jumbo-photo" src={this.state.dailyPic.hdurl} />
            </div>
        ) 
    }  
}