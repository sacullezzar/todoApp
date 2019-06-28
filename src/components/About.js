import React, { Component } from 'react'

class About extends Component {
    render() {
        const {
            location,
            getLocation
        } = this.props
        return (
            <div>
                <button onClick={getLocation}>Find me!</button>
            {
                location && <div><h1>Location</h1>
                    <span id='lat'>Lat: {location.lat}</span><br />
                    <span id='lon'>Lon: {location.lon}</span>
                </div>}
            </div>
        )
    }
}

export default About