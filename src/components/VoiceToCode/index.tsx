const SpeechToText = require('speech-to-text').default;
import * as _ from "lodash";
import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { AppState, VoiceToCode as VoiceToCodeState } from "../../store/AppState";
import { pick } from "../../utils";
const Speech = require('speak-tts').default;
import TicketList from '../TicketList';

interface VoiceToCodeProps {
    voiceToCode: VoiceToCodeState;
}

interface VoiceToCodeActions {
    createAnInterface: typeof actions.createAnInterface;
}
class VoiceToCode extends React.Component<VoiceToCodeProps & VoiceToCodeActions> {

    matchCreateInterface(text: string) {
        const lowerCaseText = _.lowerCase(text);
        if (_.includes(lowerCaseText, 'create an interface') || _.includes(lowerCaseText, 'creates an interface') || _.includes(lowerCaseText, 'creating an interface') || _.includes(lowerCaseText, 'make an interface') || _.includes(lowerCaseText, 'making an interface')) {
            const startOfName = lowerCaseText.search('named') + 6;
            const name = lowerCaseText.slice(startOfName).split(' ')[0];
            const startOfProperties = lowerCaseText.search('properties') + 11;
            const properties = text.slice(startOfProperties).split(' ');
            console.log('properties', properties);
            this.props.createAnInterface({ properties, name });
            console.log('got here');
        }
    }

    onFinalised(text: string) {
        this.matchCreateInterface(text);
        console.log(`Finalised text: ${text}`);
    }

    onFinishedListening(text: string) {
        console.log('finished listening', text);
    }

    render() {

        Speech.init({
            onVoicesLoaded: (data: any) => {
                console.log('data', data);
                Speech.setVoice('Samantha');
            },
            'rate': 0.01
        });
        function onAnythingSaid(text: string) {
            console.log(`Interim text: ${text}`);
        }

        try {
            const listener = new SpeechToText(onAnythingSaid, this.onFinalised.bind(this), this.onFinishedListening.bind(this));
            listener.startListening();
            console.log('now listening');
        } catch (error) {
            console.log(error);
        }

        return (
            <div>
                <h1>{this.props.voiceToCode.text}</h1>
                <TicketList />
            </div>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: any) => {
    console.log('state', state);
    return {
        voiceToCode: state.voiceToCode
    };
};

const mapActionsToProps = pick(actions,
    'createAnInterface');

export default connect<VoiceToCodeProps, VoiceToCodeActions>(mapStateToProps, mapActionsToProps)(VoiceToCode);
