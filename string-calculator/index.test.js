import { stringCalculator } from ".";


describe( 'string calculator', () => {
    it('when given an empty string, should return 0 ', () => {
        expect(stringCalculator("")).toEqual(0)
    }),
    it('when give a single number, should return that number', () => {
        expect(stringCalculator("4")).toEqual(4)
    }),
    it('when give a single number, should return that number', () => {
        expect(stringCalculator("10")).toEqual(10)
    })
    it('when given two numbers, should return their sum', () => {
        expect(stringCalculator("1,2")).toEqual(3)
    }),
    it('when given two numbers, should return their sum', () => {
        expect(stringCalculator("3,4")).toEqual(7)
    }),
    it('when given three numbers, should return their sum', () => {
        expect(stringCalculator("3,4,10")).toEqual(17)
    })
})