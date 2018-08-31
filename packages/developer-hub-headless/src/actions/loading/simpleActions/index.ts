import setValue from "./setValue";
export * as exports from '../exportTypes';

export default (prefix: string) => {
    return {
        setValue: setValue(prefix)
    };
};
