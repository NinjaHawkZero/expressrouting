const express = require('express')
const app = express();
const ExpressError = require('./expressError');

const {convertToNumsArray, findMean, findMode, findMedian } = require('./helpers')



app.get('/mean', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("You must pass a key of nums and a list of numbers, separated by commas", 400)
    }

    let stringsArray = req.query.nums.split(',');
    let numsArray = convertToNumsArray(stringsArray)
    console.log(numsArray)

    let result = {
        operation: "mean",
        result: findMean(numsArray)
    }

    return res.send(result);

})



app.get('/median', function(req, res, next) {
    if(!req.query.nums) {
        throw new ExpressError("You must pass a key of nums and a list of numbers, separated by commas", 400)
    }

    let stringsArray = req.query.nums.split(',');
    let numsArray = convertToNumsArray(stringsArray)

    

    let result = {
        operation: 'median',
        result: findMedian(numsArray)
    }

    return res.send(result)
})



app.get('/mode', function(req, res, next) {
    if(!req.query.nums) {
        throw new ExpressError("You must pass a key of nums and a list of numbers, separated by commas", 400)
    }

    let stringsArray = req.query.nums.split(',');
    let numArray = convertToNumsArray(stringsArray)

    let result = {
        operation: 'mode',
        result: findMode(numArray)
    }
    
    return res.send(result)

})


app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);
  
    // pass the error to the next piece of middleware
    return next(err);
  });
  
  /** general error handler */
  
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message: err.message
    });
  });
  
  
  app.listen(3000, function() {
    console.log(`Server starting on port 3000`);
  });
  