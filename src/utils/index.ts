import * as _ from 'lodash';

type PropsMap<M, K extends keyof M> = {[P in K]: M[P]};

export function pick<M extends object, K extends keyof M>(obj: M, ...props: K[]): PropsMap<M, K> {
    return _.pick<M>(obj, props) as PropsMap<M, K>;
}
