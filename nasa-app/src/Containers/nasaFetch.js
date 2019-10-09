import React from 'react'
import DailyPic from './dailyPic'

class NasaFetch extends React.Component {

    state = {
        photoData: []
    }

    fetchDailyPic () {
        const key = "Twc8x8c9cA57VmYOa3boYeqTce88Oig9md5mhjmC"
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        .then(res => res.json())
        // .then(data => this.setState({photoData: data}))
        .then(data => console.log(data))
    }

    componentDidMount() {
        this.fetchDailyPic()
    }

    render() {
        return (
            <div>
                <DailyPic photoData={photoData}/>
            </div>
        )
    }

}

export default NasaFetch
