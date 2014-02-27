var Player = {
  initialize: function(symbol) {
    this.symbol = symbol;
  },
  create: function(symbol){
    var player = Object.create(Player);
    player.initialize(symbol);
    return player;
  }
};

var Space = {
  allSpaces: [],
  markBy: function(player) {
    this.mark = player.symbol;
  },

  create: function(coordinates) {
    var space = Object.create(Space);
    space.initialize(coordinates);
    Space.allSpaces.push(space);
    return space;
  },

  initialize: function(coordinates){
    this.coordinates = coordinates;
  }

};

var Board = {
  create: function() {
    var board = Object.create(Board);
    board.initialize();
    for(var i = 1; i <= 3 ; i++){
      for(var j = 1; j <= 3; j++){
        var space = Space.create([i, j]);
      };
    };
    board.spaces = Space.allSpaces;
    return board;
  },
  initialize: function() {
    this.spaces = [];
    this.xCoordinates = [];
    this.oCoordinates = [];
  }
};
