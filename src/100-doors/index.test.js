import { Doors, generateDoors } from ".";

let numberOfDoors;
let numberOfPasses;

describe('generateDoors', () => {
    it('should return an array of length 1, when passed 1', () => {
        expect(generateDoors(1)).toEqual(['#']);
    })

    it('should return an array of length 3, when passed 3', () => {
        expect(generateDoors(3)).toEqual(['#', '#', '#']);
    })
})

describe('100 doors ', () => {
    it.each([
        [1,1, '@'],
        [2, 1, '@@'],
        [3, 1, '@@@']
    ])(
        'should return if the door is open with one pass', (numberOfDoors, numberOfPasses, result) => {
            expect(Doors(numberOfDoors, numberOfPasses)).toEqual(result);
        }
    )
})