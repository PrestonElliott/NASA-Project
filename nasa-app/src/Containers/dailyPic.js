import React from 'react'
import { Segment, Image } from 'semantic-ui-react'


const DailyPic = (props) => (
    <Segment>
        <Image src={props.photoData.hdurl} size='medium' centered />
        <p>
        Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
        facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
        referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
        electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
        ex natum rebum iisque.
        </p>
    </Segment>

)

export default DailyPic
