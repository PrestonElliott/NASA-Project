import React, { Component } from 'react'

import EpicNasaCard from './epicNasaCard'

export default class EpicNasa extends Component {

    state = {
        epicPicsData: {},
		imgUrlArr: []
    }

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
    
    render() {
        return (
            <div>
                {this.state.imgUrlArr.length &&
                this.state.imgUrlArr.map(imgUrl => 
                    imgUrl === null ? 
                    "No photos were taken on this date." :  <EpicNasaCard key={imgUrl.id} imgUrl={imgUrl} /> 
                    )
                }
            </div>
        )
    }

}