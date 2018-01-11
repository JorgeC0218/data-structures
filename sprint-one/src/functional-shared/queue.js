// Input -
// Output -
var Queue = function() {
  var instance = {
    front: 0,
    end: 0,
    storage: {},
  };
  _.extend(instance, queueMethods);
  return instance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
enqueue: function(value){
  this.storage[this.end]= value;
  this.end++;
},
dequeue: function(){
  if(this.front <= this.end){
    var value = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return value;
    }
  },
  size: function(){
    if(this.front - this.end < 0){
    return this.end - this.front;
  } else{
    return 0;
  }
 }
};
