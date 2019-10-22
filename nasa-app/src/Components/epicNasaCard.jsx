import React from 'react'
import { connect } from 'react-redux'

const EpicNasaCard = (props) => {

    return (
        <div>
            <h2>{props.epic.caption}</h2>
        </div>
    )
    
}

let mapStateToProps = state => ({ epicReducer: state.epicReducer.epicPicsData })
export default connect(mapStateToProps)(EpicNasaCard)