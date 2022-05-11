export const generateDoors = num => {
  let doors = [];

  for(let i = 1; i <= num; i++) {
    doors.push('#');
  }

  return doors;
}

export const Doors = (numberOfDoors, numberOfPasses) => {

  const arrayOfDoors = generateDoors(numberOfDoors)//create array of closed doors - starting point

  const arrayOfOpenDoors = arrayOfDoors.map( (door, index) => { 
      
    index += 1; //adjust from 0 index to count from 1
       

      if(numberOfPasses === 1){
        return '@'
      }
      else {
         
        if(index % 2 !== 0){
           return '@'
        }

        return door;

      }


    })


  return arrayOfOpenDoors.join(''); 

}