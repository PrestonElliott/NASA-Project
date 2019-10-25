import React from 'react'
// import { connect } from 'react-redux'

const EpicNasaCard = (props) => {

    return (
        <div>
            <img 
                src={props.imgUrl}
                alt="epic-photo"
            />
        </div>
    )
    
}

export default EpicNasaCard

// let mapStateToProps = state => ({ epicReducer: state.epicReducer.epicPicsData })
// export default connect(mapStateToProps)(EpicNasaCard)