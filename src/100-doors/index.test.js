import { Doors, generateDoors } from ".";

let numberOfDoors;
let numberOfPasses;
// @ is open - true is open
// # is closed - false is closed

describe('generateDoors', () => {
    it('should return an array of length 1, when passed 1', () => {
        expect(generateDoors(1)).toEqual([false]);
    })

    it('should return an array of length 3, when passed 3', () => {
        expect(generateDoors(3)).toEqual([false, false, false]);
    })
})

describe('100 doors ', () => {
    it.each([
        [1,1, '@'],
        [2, 1, '@@'],
        [3, 1, '@@@'],
        [10, 1, '@@@@@@@@@@'],
    ])(
        'should return if the door is open with one pass', (numberOfDoors, numberOfPasses, result) => {
            expect(Doors(numberOfDoors, numberOfPasses)).toEqual(result);
        }
    )
    it.each([
        [2, 2, '@#'],
        [3, 2, '@#@'],
        [4, 2, '@#@#'] 
        
    ])(
        'should return the expected string with two passes', (numberOfDoors, numberOfPasses, result) => {
            expect(Doors(numberOfDoors, numberOfPasses)).toEqual(result);
        }
    )
    it.each([
        [2, 3, '@#'],
        [3, 3, '@##'],
        [4, 3, '@###'],
    ])(
        'should return the expected string with three passes', (numberOfDoors, numberOfPasses, result) => {
            expect(Doors(numberOfDoors, numberOfPasses)).toEqual(result);
        }
    )
    it.each([
        [10, 10, '@##@####@#'],
    ])(
        'should return the expected string with 10 passes', (numberOfDoors, numberOfPasses, result) => {
            expect(Doors(numberOfDoors, numberOfPasses)).toEqual(result);
        }
    )
})

