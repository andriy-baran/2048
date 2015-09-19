function Grid(size) {

  var self = this;
  self.size = size;
  self.cells = [];

  // Public Methods
  self.init = function(){
    if(self.cells.lenght > 0){
      self.cells = [];
    }
    createCells();
  }

  self.getFreeCells = function(){

  }

  // Private Methods
  function createCells (first_argument) {
    for (var x = 0; x < self.size; x++) {
      for(var y = 0; y < self.size; y++){
        self.cells.push(new Cell({x: x, y: y}));
      }
    }
  };

  self.init();
};

var grid = new Grid(4);


