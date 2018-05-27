import { VoiceToCode as VoiceToCodeState } from '../../store/AppState';
import { isType } from 'typescript-fsa';
import { changeVoiceToCodeTextParams } from '../../actions/voiceToCode';
import actions from '../../actions';

const initialState = {
    text: 'Ask me to code'
};

function handleChangeVoiceToCodeText(state: VoiceToCodeState, action: changeVoiceToCodeTextParams) {
    return {
        ...state,
        text: action.value
    };
}

export default function docReducer(state: VoiceToCodeState = initialState, action: any) {
    if (isType(action, actions.changeVoiceToCodeText)) {
        return handleChangeVoiceToCodeText(state, action.payload);
    } else {
        return state;
    }
}
