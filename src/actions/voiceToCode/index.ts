import { SimpleActionCreator } from '../util';
const Speech = require('speak-tts').default;
import docEditorActions from '../doc';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../store/AppState';

export const actionTypes = {
    changeTextParams: 'CHANGE_VOICE_TO_CODE_TEXT'
};

export interface changeVoiceToCodeTextParams {
    value: string;
}

function getInterfaceText({ properties, name }: CreateAnInterfaceParams) {
    let propertiesText = "";
    properties.forEach((property, index) => {
        if (!property) {
            return;
        }
        const endOfLineCharacters = properties.length - 1 === index ? "" : '\n \t';
        propertiesText = propertiesText + `${property}: string;${endOfLineCharacters}`;
    });
    return `interface ${name} {
    ${propertiesText}
}
`;
}

const changeVoiceToCodeText = SimpleActionCreator<changeVoiceToCodeTextParams>(actionTypes.changeTextParams);

interface CreateAnInterfaceParams {
    properties: string[];
    name: string;
}

function getPropertiesTextToSpeak(properties: string[]) {
    return `${ properties.slice(0, properties.length - 1).join(' ') } and ${ properties[properties.length - 1] }`;
}

function createAnInterface({ properties, name }: CreateAnInterfaceParams): ThunkAction<void, AppState, void> {
    return (dispatch, getState) => {
        const currentState = getState();
        const currentCode = currentState.doc.edit;
        dispatch(changeVoiceToCodeText({ value: 'So... you want to create an interface?' }));
        Speech.speak({
            text: `I've created an interface named ${name} with the properties ${getPropertiesTextToSpeak(properties)}`,
            onError: (e: any) => { console.log('sorry an error occurred.', e); }, // optionnal error callback
            onEnd: () => { console.log('your text has successfully been spoken.'); } // optionnal onEnd callback
        });
        const newCode = `${currentCode} \n${getInterfaceText({ properties, name })}`;
        console.log('neewCodeLines', newCode.split('\n'));
        dispatch(docEditorActions.changeDocValue({ value: newCode }));
    };
}

export const voiceToCodeSimpleActions = {
    changeVoiceToCodeText
};

export default {
    createAnInterface,
    ...voiceToCodeSimpleActions
};
