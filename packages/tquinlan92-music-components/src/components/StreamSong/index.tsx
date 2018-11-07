import * as React from "react";

export default class StreamSong extends React.Component {

    componentDidMount() {
        console.log('the component mounted motherfucka');
    }

    render() {
        return (
            <audio controls>
                <source src="http://d2m83kxg25z4qj.cloudfront.net/Q.+-+Given+All+My+Love.mp3" type="audio/mpeg" />
            </audio>
        );
    }
}