//JavaScript algorithm task - Herb Garden//

//Number of days for harvest
var days = 3;

// Array displaying number of leaves per plant
var plants = [1, 10000, 10000, 4];

//output result
var result = 0;

//boolean check for min/max leaves per plant
params = true;

//constraints

//plants 1 <= plants <= 10

//leaves plants[i] <=0 plants[i] <= 10000 

//days 1 <= days <= 100

//CODE GOES HERE://


for (let k = 0; k < plants.length; k++){
    if(plants[k] >= 0 && plants[k] <= 10000){
        params = true;
    } else {
        params = false;
        break;
    }
}

if(plants.length >= 1 && plants.length <= 10 && days >= 1 && days <= 100 && params === true){
    for (let i = 0; i < days; i ++) {
        //console.log(Math.max.apply(null, plants)); //RUN CHECK
        var theMostFruitfulPlant = Math.floor(Math.max.apply(null, plants) / 2);
        //console.log(Math.floor(theMostFruitfulPlant)); //RUN CHECK
        //console.log(theMostFruitfulPlant); //RUN CHECK
        result = result + theMostFruitfulPlant
        //console.log(result); //RUN CHECK
        //find the index of largest number //RUN CHECK
        let largestNumberIndex = plants.indexOf(Math.max.apply(null, plants));
        //console.log(largestIndex); //RUN CHECK
        plants[largestNumberIndex] = plants[largestNumberIndex] - theMostFruitfulPlant
        
        //console.log(plants[largestNumberIndex]); //RUN CHECK
        //console.log(plants); //RUN CHECK
        for (let j = 0; j <= plants.length; j++) {
            //according to constrain parameters - plant should not grow more than 10000 leaves
            if (plants[j] >=0 && plants[j] <=9998) {
                plants[j] = plants[j] + 2;
            }       
        }
    }
console.log(result);
} else if (params === false){
    console.log("Incorrect parameters: (Number of leaves is not within the allowed range");
} else {
    console.log("Incorrect parameters: (days variable is not within the allowed range)");
}
    
