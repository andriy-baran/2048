function EventCatcher(){
  this.listen();
  this.grid = new CellsManager(4);
}

EventCatcher.prototype.listen = function(first_argument) {
  var self = this;
  document.addEventListener("keydown", function (event) {
    switch(event.which) {
      case 37:
        alert('left');
        break;
      case 38:
        alert('up');
        break;
      case 39:
        alert('right');
        self.grid.moveRight();
        self.grid.addNewNumber();
        break;
      case 40:
        alert('down');
        break;
    }
  });
};

new EventCatcher();
