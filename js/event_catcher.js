function EventCatcher(){
  this.listen();
  this.grid = new CellsManager(4);
  this.grid.addNewNumber();
}

EventCatcher.prototype.listen = function(first_argument) {
  var self = this;
  document.addEventListener("keydown", function (event) {
    self.grid.move(event.which);
    self.grid.addNewNumber();
    event.preventDefault();
  });
};

new EventCatcher();
