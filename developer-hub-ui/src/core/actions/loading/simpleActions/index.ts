import setValue from "./setValue";

export default (prefix: string) => {
    return {
        setValue: setValue(prefix)
    };
};
