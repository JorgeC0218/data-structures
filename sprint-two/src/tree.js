var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create a child
  var newChild = new Tree(value);
  //push into children array
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if(this.value === target){
    return true;
  }
  //loop through the children array
  for(var i = 0; i < this.children.length; i++){
    //compare if this value is equal to target
    var child = this.children[i];
    if(child.contains(target)){
      //return true
      return true;
    }
  }

  return false;

};
/*var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.addChild = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(value){
  var newChil = new Tree(value);
  this.addChild.push(newChil);
};

treeMethods.contains = function(target) {
  if(this.value === target){
    return true;
  }
  for(var i = 0; i < this.children.length; i++){
    var child = this.addChild[i];
    if(child.contains(target)){
      return true;
    }
    return false;
  }
  return false;
};
*/
/*
 * Complexity: What is the time complexity of the above functions?
 */
