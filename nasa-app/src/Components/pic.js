import React, { Fragment } from 'react'
import { Image } from 'react-bootstrap'


const Pic = (props) => {
    return (
        <Fragment>
            <div>
                <Image src={props.photoData.hdurl}> </Image>
            </div>
        </Fragment>
    )
}

export default Pic 