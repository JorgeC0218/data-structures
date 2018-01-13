var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

// input -number
// output - function that creates obj
  list.addToTail = function(value) {
    var newTail = Node(value);
    if(!list.head){
      list.head = newTail;
    }
    if(list.tail){
      list.tail.next = newTail;
    }
    list.tail = newTail;
    return newTail;
  };

  // function declaration
  list.removeHead = function(){
    var oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;
    // define newHead var to equal Node
    // if no head key value exist create new node var and assign it to node function
    // if head key value does exist reassign head to newHead reassign next value to newHead
  };

  // input - number
  // output - boolean
  list.contains = function(target) {
var newHead = list.head;
 while(newHead){
   if(newHead.value === target){
     return true;
   }
   newHead = newHead.next;
 }
 return false;
    //if target exist in list obj return true
    // else return false

  };

  return list;
};

// input -
// output -
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
