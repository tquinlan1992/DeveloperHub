import sample from './';

it('should return the params', () => {
    const params = 'testParams';
    expect(sample(params)).toBe(params);
})

