import React, { Component } from 'react'
import EpicNasaCard from './epicNasaCard'

export default class EpicNasa extends Component {
    
    render() {

        return (
            <div>
                {/* {this.props.epicPicsData.length &&
                this.props.epicPicsData.map(epic => this.constructEpicImgUrl(epic))
                } */}

                {/* {this.props.epicPicsData.length &&
                this.props.epicPicsData.map(epic => <EpicNasaCard key={epic.id} epic={epic} />)
                } */}
            </div>
        )
    }

}