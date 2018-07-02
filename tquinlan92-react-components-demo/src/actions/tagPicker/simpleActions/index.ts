import onTagSelectionChange from "./onTagSelectionChange";

export default (reducerName: string) => {
    return {
        setStoryPoint: onTagSelectionChange(reducerName)
    };
};
