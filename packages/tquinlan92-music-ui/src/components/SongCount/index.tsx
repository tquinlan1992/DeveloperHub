import * as React from 'react'; 

async function getSongCountInfo() {
    const songCountResponse = await fetch('https://1wvfnhvrl4.execute-api.us-east-1.amazonaws.com/Dev/songcount');
    const songCountParsed = songCountResponse.json();
    return songCountParsed;
}

export default class Component extends React.Component {
    state = {
        playCount: 0,
        rate: '$0.00',
        totalCost: '$0.00'
    };

    async componentDidMount() {
        const {playCount, totalCost, rate } = await getSongCountInfo();
        this.setState({
            playCount,
            rate,
            totalCost
        });
    }

    render() {
        return  (
            <h1>{this.state.playCount} x {this.state.rate} = {this.state.totalCost} </h1>
        );
    }
}
