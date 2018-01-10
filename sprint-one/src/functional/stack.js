var Stack = function() {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  //Input - string to go into obj
  //Output - number of total values in obj
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
  if (count > 0){
    count--;
    var data = storage[count];
    delete storage[count];
    return data;
    }
  };

  someInstance.size = function() {
    return count;
    // input is object
    // iterate through obj
    // if obj equal to 0 return 0
    // return number of value in obj
  };

  return someInstance;
};
