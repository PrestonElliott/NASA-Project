import React, { Component } from 'react'

import EpicNasaCard from './epicNasaCard'

export default class EpicNasa extends Component {
    
    render() {

        return (
            <div>
                {this.props.imgUrlArr.length &&
                this.props.imgUrlArr.map(imgUrl => <EpicNasaCard key={imgUrl.id} imgUrl={imgUrl} /> )
                }
            </div>
        )
    }

}