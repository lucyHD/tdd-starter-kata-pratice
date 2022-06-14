export const stringCalculator = (num) => {
        
        if(!num){
            return 0;
        }
        else { 

        let sum = (num.split(',')).map(num => parseInt(num)).reduce( (previousVal, currentVal) => {
            return previousVal + currentVal
        })

        return sum;

    }



        //convert string into array to get each number
        //map over array and add to a count
        //return count
}
