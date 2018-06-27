import setValue from "./setValue";
import * as exports from '../exportTypes';
exports;

export default (prefix: string) => {
    return {
        setValue: setValue(prefix)
    };
};
