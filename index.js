'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * identity: take a value and returns it unchanged
 * @param {Any datatype} value: can be any datatype / value.
 * 
 * @return {Any Datatype}: Will be the same value as the input value 
 */
 function identity(value){
    return value;
}

module.exports.identity = identity;

/**
 * typeOf: takes a value and returns type of value as a string
 * @param {Any datatype} value: can be any data type
 * 
 * @return value: will return the type of value as a string 
 */
 function typeOf(value){
      if(typeof value === "function"){
        // will return function as a string
        return "function";
        //value is a boolean
    } else if(typeof value === "boolean"){
        //return boolean as a string
        return "boolean";
        //value is null
    }else if( value === null){
        //will return null as a string
        return "null";
        //value is undefined
    }else if(typeof value === "undefined"){
        //return undefined as a string
        return "undefined";
        //value is a string
    }else if(typeof value === "string"){
        //return string as a string
        return "string";
        //value is an array literal
    }else if(Array.isArray(value)){
        //will return 'array' as a string
        return "array";
    }else if(typeof value === "number"){
        //return number as a string
        return "number";
    }else if (typeof value === 'object' && value !== null && value != Date() && Array.isArray(value) !== true){
        return 'object';
    }

}
module.exports.typeOf = typeOf;

/**
 * first: designed to see if the number is within an array bringing out the number of elements desired, otherwise
 *      [], or first element in array
 * 
 * @param {Array} array: The collection being tested
 * @param {number} number: The number used to test if its a number within an array
 * 
 * @return {[]}: weather the param array is not an array or if the number given is a negative
 * @return {first element in array}: if number is not given or not a number
 * @return {whole array}: if number given is greater then the length of the array
 * @return {modified array}: returning array with total number of elements as the number starting from the beginning of array
 */
function first (array, number) {
     // checking is array is not an array
     if(Array.isArray(array) === false) {
         // returning array literal
         return [];
         // checking if number is grater than array length
         // returning the whole array
     } else if (number > array.length ) {
         return array;
         // checking if number is less than 0
         // returning []
     } else if (number < 0) {
         return [];
         // checking if number is greater than 0 and less than array lenght
         //return first number in the array
     } else if (number > 0 && number <= array.length) {
         return array.splice(0, number);
         //checking if number is not a number
         // returning array at 0 index
     } else if (Number.isNaN(number) === false) {
         return array[0];
     }
     
    
}
module.exports.first = first;

/**
 * last: designed to see if the number is within an array bringing out the number of elements desired, otherwise
 *      [], or last element in array
 * 
 * @param {Array} array: The collection being tested
 * @param {number} number: The number used to test if its a number within an array
 * 
 * @return {[]}: weather the param array is not an array or if the number given is a negative
 * @return {last element in array}: if number is not given or not a number
 * @return {whole array}: if number given is greater then the length of the array
 * @return {modified array}: returning array with total number of elements as the number starting fron the end of array
 */
 
 function last(array, number) {
    // If value is not an array returning []
    if(Array.isArray(array) === false) {
        return [];
        // if number is bigger then the array length returning the whole array
    } else if (number > array.length ) {
         return array;
         // if number is a negative number returning []
} else if (number < 0) {
         return [];
         // if number is one of the index within the array returning that number of elements
} else if (number > 0 && number <= array.length) {
         return array.slice(array.length-number, array.length);
         // if value is not a number returning the last element in the array
} else if (Number.isNaN(number) === false) {
         return array[array.length-1];
     }
}
module.exports.last = last;
/**
 * indexOf: desgined to give the index of the first instance of a value
 * 
 * @param {Array} array: Array with elements that might have the same values in diffrent index
 * @param {Any datatype} number: Value that will be used to find its first instance
 * 
 * @return {-1} : if value given is not in array
 * @return {number}: returns index where the value is first found
 * 
 */
 
 function indexOf(array, number) {
    // using Array.isArray to test the truthy of the array 
   if(Array.isArray){
       //returning the first occurance of the value
       return array.indexOf(number);
   }
}
module.exports.indexOf = indexOf;
/**
 * contains: desgined to test if an array has a certain value
 * 
 * @param {Array} array: An array to iterate and test its values
 * @param {Any datatype} value: a datatype to see if its within the array
 * 
 * @return {true}: if the value is within the array
 * @return {false}: if the value is not in the array
 * 
 */
 
 function contains(array, value) {
   var bool = false;
   //using a forloop it iterate over the array
    for(var i = 0; i < array.length; i++) {
        //testing to see if the contents of the array has a value
       array[i] === value ? bool = true : false; 
    }
    return bool;
 }
module.exports.contains = contains;

/**
 * unique: designed to return an array with no duplicates
 * 
 * @param {Array} array: an array with duplicates
 * @return {Array}: an array with no duplicates
 * 
 * 
 */
 
 function unique(array) {
    // using array.from to pass all the arguments into an array, by using set will return no repeats.
    var uniqueArray = Array.from(new Set(array));
    return uniqueArray;
}

module.exports.unique = unique;

/**
 * filter: running the element, index, and array through another function. 
 * 
 * @param {Array} array: Am array with elements
 * @param {function} fun: a function that tests truthy of a value
 * 
 * @return {array}: This array will contain values that returned true in the fun function
 */
 function filter(array, fun) {
    // setting a container for the new array
  let filterArr = [];
  //using for loop to iterate over array
  for (var i = 0; i < array.length; i++) {
      // using the fun argument and passing the elements, index and array
      // if function returns truthy it will get push that element into new array
     if(fun(array[i], i, array)) {
          filterArr.push(array[i]);
      }
  }
     return filterArr;
}
 module.exports.filter = filter;
 

  /**
 * reject: running the element, index, and array through another function. 
 * 
 * @param {Array} array: An array with elements
 * @param {function} fun1: a function that tests falsy of a value
 * 
 * @return {array}: This array will contain values that returned false in the fun1 function
 */
  
function reject (array, fun1) {
    //setting a new container for the array
    let rejArray = [];
    // iterating for array
    for(var i = 0; i < array.length; i++) {
        // if the value return false then that element will get pushed into new array
        if(fun1(array[i], i, array) === false) {
            rejArray.push(array[i]);
        }
    }
    return rejArray;
}

module.exports.reject = reject;

/**
 * partition: designed to take all the false and true values in an array and seperate them into there own array
 * 
 * @param {Array} array: array that has truthy and falsy values
 * @param {function} action: function that returns true if values given are true
 * 
 * @return {Array}: An array that has an array of true values and another array of false values
 * 
 */
 
 function partition (array,action){
    let both = [];
    let small = [];
    let large = [];
    // using a for loop to iterate over the array
    for(var i = 0; i < array.length; i++) {
        // if action returns true element will be pushed into small array
        if(action(array[i], i, array)) {
            small.push(array[i]); 
            // if action returns falsy element will get pushed into large array
            } else if (!action(array[i], i, array)) {
            large.push(array[i]) ;
            } 
    }
    //small and large arrays gets pushed into both array
    both.push(small, large);
    // returining an array with two subarrays
    return both;
}
module.exports.partition = partition;

/**
 * map: passing values of collection into another function getting back the retuned value
 * 
 * @param {Array or Object} collection : an array or object which its elements will be used
 * @param {function} fun3 : function that will do something a give back another value
 * 
 * @return {Array}: a new array that has the returned values of fun3 function
 * 
 */
 
 function map(collection, fun3){
    // setting new container for a new array
    var newArray = [];
    // testing if collection is an array
    if(Array.isArray(collection)){
        // iterating over array 
        for(var i = 0; i < collection.length; i++){
            // saving the return value of the function and pushing it into new array
           var val1 =fun3(collection[i],i,collection);
            newArray.push(val1);
        }
        // testing if collection is stricly an object
    }else if(typeof collection === 'object' && collection !== null && collection != Date() && Array.isArray(collection) !== true){
        //using for in loop to iterate over object
        for(var key in collection){
            // saving the return value in a new variable and pushing into the new array
            var val2 = fun3(collection[key],key,collection);
            newArray.push(val2);
        }
    }
    return newArray;
}
module.exports.map = map;

/**
 * pluck: designed to take the value property of an object thats inside an array
 * 
 * @param {Array} array: an array with objects that have key value pairs
 * @param {property} property: will be the property that will be plucked into a new array
 * 
 * @return {Array}: will return an array that has the values of property
 * 
 * 
 */
 function pluck(array, property) {
// using the function _.map and setting the argument array, function with element index and collection
// will give an array with elements
//returning an array with values of objects
   return map(array, function(element, index, collection){
        return element[property];
    });
}
 module.exports.pluck = pluck;
 
 /**
  * every: designed to test the truthy or falsy values of elements within the array or object
  * 
  * @param {Array or Object} collection: an array or object which its values will go through a function to test true or false
  * @param {function} fun: a function that will test its  elements
  * 
  * @return: true or false
  * 
  * 
  */
  function every(collection, fun) {
    // testing to see if function is not a function or given
    if (typeof(fun) !== 'function') {
        // using contains with arguments of collection and false
      return !contains(collection, false);
   }
    var newArray = [];
    newArray = map(collection, fun);
    console.log(newArray);
    return !contains(newArray, false);
//     
}
   module.exports.every = every;
   
/**
  * some: designed to test the truthy or falsy values of elements within the array or object
  * 
  * @param {Array or Object} collection: an array or object which its values will go through a function to test true or false
  * @param {function} fun: a function that will test its  elements
  * 
  * @return {true}: true if one element is true for at least one element 
  * @return {false}: if all elements are false
  * 
  * 
  */
  
  function some(collection,fun){
    if (typeof(fun) !== 'function') {
      return contains(collection, false);
   }
   var newArray = [];
    newArray = map(collection, fun);
    console.log(newArray);
    return contains(newArray, true);
}
  module.exports.some = some;
   
   /**
    * reduce: designed to reduce an array by adding the values within the array
    * 
    * @param {Array} array: array with contents within to reduce
    * @param {funciton} fun: function to pass elements within the array
    * @param {seed}: used determine the first position
    * 
    * @return {value} : will be value of previous results + current result
    * 
    * 
    * 
    */
    
    function reduce (array, fun, seed){
 var previousResult;
 if (seed == undefined){
        seed = array[0];
        for (let i = 1; i < array.length; i++) {
     if (i === 1) {
         previousResult = fun(seed, array[i], i);
     } else if ( i !== array.length - 1) {
         previousResult = fun(previousResult, array[i], i);
     } else {
         return fun(previousResult, array[i], i);
     }
     }
         }
 for (let i = 0; i < array.length; i++) {
     if (i === 0) {
         previousResult = fun(seed, array[i], i);
     } else if ( i !== array.length - 1) {
         previousResult = fun(previousResult, array[i], i);
     } else {
         return fun(previousResult, array[i], i);
     }
     }
}
 module.exports.reduce = reduce;  
 
 /**
  * extend: used to extend an object by
  * 
  * @param {objects}: with values inside
  * 
  * @reuturn {object}: extended object
  * 
  * 
  */
  
  function extend (...object){
      //using ... to put all the arguments into an array
   // iterate through the array of Objects
   for (let i = 1; i < object.length; i++){
         // using the assign method to replace the first object and combine the others by overlapping any keys that might be the same
         Object.assign(object[0], object[i]);
     }
     // return the first array.
     return object[0];
   }
   
   module.exports.extend = extend;