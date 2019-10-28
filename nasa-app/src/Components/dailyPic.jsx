import React, { Fragment } from 'react'
// import { connect } from 'react-redux'
import { Image, Jumbotron } from 'react-bootstrap'


// ADD MODAL WITH FULL INFORMATION AND HD PHOTO

const DailyPic = (props) => {
    
    return (
        <Fragment>
            <div>
                <Jumbotron>
                    <h2 id="daily-pic-title">{props.dailyPic.title}</h2>
                    <p>{props.dailyPic.explanation}</p>
                    <Image id="jumbo-photo" src={props.dailyPic.hdurl} />
                </Jumbotron>
            </div>
        </Fragment>
    ) 
    
}

export default DailyPic

// let mapStateToProps = state => ({ dailyPic: state.dailyPicReducer.dailyPic })
// export default connect(mapStateToProps)(DailyPic) 