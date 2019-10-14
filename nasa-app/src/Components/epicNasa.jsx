import React, { Component } from 'react'
import EpicNasaCard from './epicNasaCard'

class EpicNasa extends Component {
    render() {
        return (
            <div>
                { this.props.epicData.map(epic =>
                    <EpicNasaCard key={epic.id} epic={epic} />) 
                }
            </div>
        )
    }

}

export default EpicNasa