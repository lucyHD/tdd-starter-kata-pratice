export const generateDoors = num => {
  let doors = [];

  for(let i = 1; i <= num; i++) {
    doors.push('#');
  }

  return doors;
}

export const Doors = (numberOfDoors, numberOfPasses) => {
  //get an array of doors using generateDoors

  //go through the array and change the closed doors to open doors

  //return the joined array so it is a single string


  return numberOfDoors === 1 ? '@' : '@@';

}