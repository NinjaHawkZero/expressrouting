function convertToNumsArray(array) {
    let result = [];

    for (let i = 0; i <= array.length - 1; i++) {
        let val = Number(array[i])

        if (Number.isNaN(val)) {
            return new Error(
                `The value of ${val} at index ${i} is not a number.`
            );
        }

        result.push(val)
    }
    
    return result;
}





function findMean(arr) {
    if(arr.length === 0) return 0;
    let result = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        result += arr[i]
        
    }

    let avg = result / arr.length

    return avg

}



function findMedian(array) {
    array.sort((a, b) => a - b);


    let middleIndex = Math.floor(array.length / 2);
    let median;


    if(array.length % 2 === 0) {
        median = (array[middleIndex] + array[middleIndex - 1]) / 2;
    } else {median = array[middleIndex]}

    return median


}


function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
  }




  function findMode(arr) {
    let freqCounter = createFrequencyCounter(arr);
  
    let count = 0;
    let mostFrequent;
  
    for (let key in freqCounter) {
      if (freqCounter[key] > count) {
        mostFrequent = key;
        count = freqCounter[key];
      }
    }
  
    return +mostFrequent;
  }



  module.exports = {

    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
    convertToNumsArray
  };