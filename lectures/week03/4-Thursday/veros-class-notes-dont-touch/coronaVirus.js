
let covidData = require('./data');


/**
 * Print the follwoing for each state and territory
 * 
 * 1. State Name 
 * 2. State Population 
 * 3. Number of Cases 
 * 4. Number of Deaths
 * 
 * 
 * Find the following 
 * 1. Total (sum) of all the cases for each state and territory
 * 1. Total (sum) of all deaths
 * 2. Which state or territory had the highest number of cases 
 * 3. Which state or territory had the higheest number of deaths
 * 
 * 4. lowest state or territory deaths 
 * 5. lowest state or territory for cases
 * 
 */

<<<<<<< HEAD
function arr(array){
    let Narr = []
=======
console.log(covidData);
>>>>>>> 8cdfca96e4a0e21f86e1a511b124c26a9752d167

    for(i=0; i<array.length ; i++){
        Narr.push(array[i].Name)
   
        }

return Narr
       
}

console.log(arr(covidData));
