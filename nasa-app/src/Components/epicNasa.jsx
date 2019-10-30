import React, { Component } from 'react'

import EpicNasaCard from './epicNasaCard'

export default class EpicNasa extends Component {
    
    render() {

        return (
            <div>
                {this.props.imgUrlArr.length &&
                this.props.imgUrlArr.map(imgUrl => 
                    imgUrl === null ? 
                    "No photos were taken on this date." :  <EpicNasaCard key={imgUrl.id} imgUrl={imgUrl} /> 
                    )
                }
            </div>
        )
    }

}