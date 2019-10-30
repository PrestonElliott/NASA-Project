import React, { Fragment } from 'react'
import { Image, Jumbotron } from 'react-bootstrap'
import Counter from './counter'

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
                <Counter/>
            </div>
        </Fragment>
    ) 
    
}

export default DailyPic