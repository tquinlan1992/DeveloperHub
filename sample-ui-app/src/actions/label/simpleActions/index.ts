import changeLabel from "./changeLabel";

export default (reducerName: string) => {
    return {
        changeLabel: changeLabel(reducerName)
    };
};
