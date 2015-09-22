function CellsManager(size) {

  var self = this,
      map = {
        38: 'top',
        39: 'right',
        40: 'bottom',
        37: 'left'
      }
  self.size = size;
  self.cells = [];
  self.cells_obj = {};
  self.direction = null;

  // Public Methods
  self.init = function(){
    createCells();
    self.addNewNumber();
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

  self.move =function(code){
    self.direction = map[code];
    self.clearMergeabilityFlags();
    self[self.direction+'OrderFullCells']().forEach(function(prevCell){
      var nextCell = self.cells_obj[prevCell[self.direction]()];
      while (nextCell && (nextCell.isEmpty() || (nextCell.isFull() && nextCell.number == prevCell.number))){
        if(nextCell.isFull()){
          if(!nextCell.merged && !prevCell.merged && nextCell.number == prevCell.number) {
            nextCell.mergeWith(prevCell);
            break;
          }
        } else {
          prevCell.moveNumberTo(nextCell);
        }
        prevCell = nextCell
        nextCell = self.cells_obj[prevCell[self.direction]()]
      }
    });
  }

  self.rightOrderFullCells = function(){
    return self.getFullCells().sort(function(a,b){
      if(a.position.y > b.position.y){
        return -1;
      }
      if(a.position.y < b.position.y){
        return 1;
      }
      return 0;
    })
  }

  self.leftOrderFullCells = function(){
    return self.rightOrderFullCells().reverse();
  }

  self.topOrderFullCells = function(){
    return self.bottomOrderFullCells().reverse();
  }

  self.bottomOrderFullCells = function(){
    return self.getFullCells().sort(function(a,b){
      if(a.position.x > b.position.x){
        return -1;
      }
      if(a.position.x < b.position.x){
        return 1;
      }
      return 0;
    })
  }

  self.clearMergeabilityFlags = function(){
    self.cells.forEach(function(cell, index){
      cell.merged = false;
    });
  }

  self.addNewNumber = function (){
    var empty = self.getEmptyCells()
    if(empty.length > 0) {
      var randomCell = empty[Math.floor(Math.random()*empty.length)];
      randomCell.number = Math.random() < 0.9 ? 2 : 4
      randomCell.updateHTML();
    }
  }

  // Private Methods
  function createCells (first_argument) {
    self.cells = [];
    self.cells_obj = {};

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

