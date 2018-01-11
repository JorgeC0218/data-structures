var Queue = function() {
  var someInstance = {};
  var front = 0;
  var end = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  //
  someInstance.enqueue = function(value) {
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function() {
      var data = storage[front];
      delete storage[front];
      front++;
      return data;
  };

  someInstance.size = function() {
    if((front - end) < 0){
    return end - front;
  } else{
    return 0;
  }
  };

  return someInstance;
};
