import setStoryPoint from "./setStoryPoint";
import setDescription from './setDescription';
import setTitle from './setTitle';
export * from '../exportTypes';

export default (prefix: string) => {
    return {
        setStoryPoint: setStoryPoint(prefix),
        setDescription: setDescription(prefix),
        setTitle: setTitle(prefix)
    };
};
