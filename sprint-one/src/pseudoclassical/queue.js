
var Queue = function() {
  this.front = 0;
  this.end = 0;
  this.storage = {};

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(value){
  this.storage[this.end]= value;
  this.end++;
};
Queue.prototype.dequeue = function(){
  if(this.front <= this.end){
    var value = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return value;
    }
  };
  Queue.prototype.size = function(){
    if(this.front - this.end < 0){
    return this.end - this.front;
  } else{
    return 0;
 }
};
