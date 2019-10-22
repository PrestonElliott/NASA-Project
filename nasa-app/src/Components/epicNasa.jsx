import React, { Component } from 'react'
import EpicNasaCard from './epicNasaCard'

class EpicNasa extends Component {

    render() {
        console.log(this.props)

        return (
            <div>
                {this.props.epicPhotoData.length &&
                this.props.epicPhotoData.map(epic => <EpicNasaCard key={epic.id} epic={epic} />)
                }
            </div>
        )
    }

}

export default EpicNasa