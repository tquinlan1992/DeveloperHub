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

const createAnInterface = ({ properties, name }: CreateAnInterfaceParams): ThunkAction<null, AppState, null> => {
    (dispatch, getState) => {
        dispatch(changeVoiceToCodeText({ value: 'So... you want to create an interface?' }));
        Speech.speak({
            text: `I've created an interface named ${name} with the properties ${getPropertiesTextToSpeak(properties)}`,
            onError: (e: any) => { console.log('sorry an error occurred.', e); }, // optionnal error callback
            onEnd: () => { console.log('your text has successfully been spoken.'); } // optionnal onEnd callback
        });

        dispatch(docEditorActions.changeDocValue({ value: getInterfaceText({ properties, name }) }));
    };
};

export const voiceToCodeSimpleActions = {
    changeVoiceToCodeText
};

export default {
    createAnInterface,
    ...voiceToCodeSimpleActions
};
