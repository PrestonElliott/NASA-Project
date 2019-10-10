import React, { Fragment } from 'react'
// import Pic from './pic'

const DailyPic = (props) => {
    return (
        <Fragment>
            <div>
                <p>{props.data.explanation}</p>
                <p>{props.data.title}</p>
                <img alt="not loaded" src={props.data.hdurl} />
            </div>
        </Fragment>
    )
}

export default DailyPic 