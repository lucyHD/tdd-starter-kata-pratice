export const generateDoors = num => {
  let doors = [];

  for(let i = 1; i <= num; i++) {
    doors.push(false);
  }

  return doors;
}

export const Doors = (numberOfDoors, numberOfPasses) => {

  const arrayOfDoors = generateDoors(numberOfDoors)//create array of closed doors - starting point


  for(let currentPass = 1; currentPass <= numberOfPasses; currentPass++) {
    for(let i = 0; i < arrayOfDoors.length; i++) {
      const position = i + 1;
      //adjust from 0 index to count from 1
      if(position % currentPass === 0) {
        arrayOfDoors[i] = !arrayOfDoors[i];
      }
    }
  }

  return arrayOfDoors.map(door => door ? '@' : '#').join('');

}