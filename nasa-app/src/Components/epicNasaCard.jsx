import React from 'react'
// import { connect } from 'react-redux'

const EpicNasaCard = (props) => {

    return (
        <div>
            <img id="epic-images" src={props.imgUrl} alt="epic-pics" />
        </div>
    )
    
}

export default EpicNasaCard

// let mapStateToProps = state => ({ epicReducer: state.epicReducer.epicPicsData })
// export default connect(mapStateToProps)(EpicNasaCard)