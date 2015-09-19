function Cell (position) {

  self.position = position;
  self.value = null;
  self.getDOMElement().setAttribute("title", 'pos_'+self.position.x+'_'+self.position.y);

  self.isFree = function() {
    return self.value == null;
  };

  self.IsOccupied = function() {
    return !self.isFree();
  };

  self.getDOMElement = function() {
    var selector = 'pos_'+self.position.x+'_'+self.position.y;
    return document.getElementById(selector);
  };

  // Private Methods

  function changeContent(){
    var cellDOM = self.getDOMElement();
    var cellContent = cellDOM.createElement('DIV');
    cellContent.className = 'inner_content';
    cellDOM.appendChild(cellContent);
  }
};

