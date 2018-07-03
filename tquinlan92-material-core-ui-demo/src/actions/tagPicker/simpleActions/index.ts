import onTagSelectionChange from "./onTagSelectionChange";
import setDisplaySelectedTags from './setDisplaySelectedTags';

export default (reducerName: string) => {
    return {
        onTagSelectionChange: onTagSelectionChange(reducerName),
        setDisplaySelectedTags: setDisplaySelectedTags(reducerName)
    };
};
