function Cell (position) {
  this.position = position;
};

var cellNumber = null

Object.defineProperty(Cell.prototype, 'number', {
  get: function() {
    return cellNumber;
  },
  set: function(val) {
    cellNumber = val;
    var cellDOM = this.getDOMElement();
    if(this.isOccupied()){
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
  }
});

Cell.prototype.isFree = function() {
  return this.number == null;
};

Cell.prototype.isOccupied = function() {
  return !this.isFree();
};

Cell.prototype.getDOMElement = function() {
  var selector = 'pos_'+this.position.x+'_'+this.position.y;
  return document.getElementById(selector);
};




