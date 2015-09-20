function CellsManager(size) {

  var self = this;
  self.size = size;
  self.cells = [];
  self.cells_obj = {};
  self.direction = {
    top: -1,
    right: 1,
    bottom: 1,
    left: -1
  }

  // Public Methods
  self.init = function(){
    if(self.cells.lenght > 0){
      self.cells = [];
    }
    createCells();
    self.addNewNumber();

    // Random cell
  }

  self.getEmptyCells = function(){
    return self.cells.filter(function(cell){
      if(cell.isEmpty()){
        return cell;
      }
    })
  }

  self.getFullCells = function(){
    return self.cells.filter(function(cell){
      if(cell.isFull()){
        return cell;
      }
    })
  }

  self.moveRight =function(){
    self.getFullCells().forEach(function(cell){
      var maxIndex = self.size - 1;
      if(cell.position.y <= maxIndex){
        var prevCell = cell;
        var coordinates = prevCell.position.x+'_'+(prevCell.position.y+1)
        var nextCell = self.cells_obj[coordinates]
        while (nextCell && nextCell.isEmpty() && nextCell.position.y <= maxIndex){
          prevCell.moveNumberTo(nextCell);
          prevCell = nextCell
          coordinates = prevCell.position.x+'_'+(prevCell.position.y+1)
          nextCell = self.cells_obj[coordinates]
        }
      }
    });
  }

  self.addNewNumber = function (){
    var empty = self.getEmptyCells()
    var randomCell = empty[Math.floor(Math.random()*empty.length)];
    randomCell.number = Math.random() < 0.9 ? 2 : 4
    randomCell.updateHTML();
    // return ;
  }

  // Private Methods
  function createCells (first_argument) {
    for (var x = 0; x < self.size; x++) {
      for(var y = 0; y < self.size; y++){
        var cell = new Cell({x: x, y: y})
        self.cells.push(cell);
        self.cells_obj[x+'_'+y] = cell;
      }
    }
  };

  self.init();
};

// var grid = new CellsManager(4);

