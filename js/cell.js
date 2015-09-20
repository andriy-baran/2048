function Cell (position) {
  this.position = position;
  this.number = null;
};

Cell.prototype.isXEqual = function(x) {
  return this.position.x == x;
};

Cell.prototype.isYEqual = function(y) {
  return this.position.y == y;
};

Cell.prototype.isEmpty = function() {
  return this.number == null;
};

Cell.prototype.isFull = function() {
  return !this.isEmpty();
};

Cell.prototype.getDOMElement = function() {
  var selector = 'pos_'+this.position.x+'_'+this.position.y;
  return document.getElementById(selector);
};

Cell.prototype.moveNumberTo = function(nextCell) {
  nextCell.number = this.number;
  this.number = null;
  nextCell.updateHTML();
  this.updateHTML();
};

Cell.prototype.updateHTML = function() {
  var cellDOM = this.getDOMElement();
  if(this.isFull()){
    var cellContent = document.createElement('DIV');
    cellContent.className = 'inner-content';
    var cellText = document.createTextNode(this.number);
    cellContent.appendChild(cellText);
    cellDOM.appendChild(cellContent);
  } else {
    while (cellDOM.firstChild) {
      cellDOM.removeChild(cellDOM.firstChild);
    }
  }
};




