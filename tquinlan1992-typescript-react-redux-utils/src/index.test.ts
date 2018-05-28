import { getCreators } from 'tquinlan1992-typescript-react-redux-utils';

describe('1 test', () => {
    it('should pass', () => {
        expect(true).toBe(true);
    });
});

describe('when getCreators is given', () => {
    describe('an empty object', () => {
        it('getCreators should return an empty object', () => {
            const creators = getCreators({});
            expect(creators).toMatchObject({});
        });
    });
    describe('with an object without a actionCreator', () => {
        it('getCreators should return an empty object', () => {
            const creators = getCreators({noActionCreator: {} as any});
            expect(creators).toMatchObject({});
        });
    });
});
