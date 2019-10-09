import React, { Fragment } from 'react'
import Pic from './pic'

const DailyPic = (props) => {
    return (
        <Fragment>
            <div>
                {props.photoData.map(pic =>
                    <Pic
                        key={pic.id}
                        pic={pic}
                    />
                )}
            </div>
        </Fragment>
    )
}

export default DailyPic 