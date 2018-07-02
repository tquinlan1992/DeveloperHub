import onTagSelectionChange from "./onTagSelectionChange";

export default (reducerName: string) => {
    return {
        onTagSelectionChange: onTagSelectionChange(reducerName)
    };
};
