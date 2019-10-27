import React from 'react'
import Image from 'react-bootstrap/Image'
// import { connect } from 'react-redux'

const EpicNasaCard = (props) => {

    return (
        <div>
            <Image id="epic-images" src={props.imgUrl} rounded alt="epic-photo" />
        </div>
    )
    
}

export default EpicNasaCard

// let mapStateToProps = state => ({ epicReducer: state.epicReducer.epicPicsData })
// export default connect(mapStateToProps)(EpicNasaCard)