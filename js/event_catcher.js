function EventCatcher(){
  this.listen();
}

EventCatcher.prototype.listen = function(first_argument) {
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
        break;
      case 40:
        alert('down');
        break;
    }
  });
};

new EventCatcher();
