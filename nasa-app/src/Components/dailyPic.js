import React, { Fragment } from 'react'
import { Image, Jumbotron, Button } from 'react-bootstrap'

// UPDATED TO CLASS COMPONENT
// const DailyPic = (props) => {

class DailyPic extends React.Component {

    render() {
        return (
            <Fragment>
                <div>
                    <Jumbotron>
                        <h2>{this.props.data.title}</h2>
                        <p>{this.props.data.explanation}</p>
                        <p>
                        <Button onClick={(e) => this.displayHdImage(e)} variant="primary">Show HD Image</Button>
                        </p>
                    </Jumbotron>
                </div>

                <div>
                    <Image src={this.props.data.url} fluid />
                </div>
            </Fragment>
        )
    }
}

export default DailyPic 