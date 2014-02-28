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
    this.mark = player;
  },

  create: function(coordinates) {
    var space = Object.create(Space);
    space.initialize(coordinates);
    Space.allSpaces.push(space);
    return space;
  },

  initialize: function(coordinates){
    this.coordinates = coordinates;
    this.mark = "";
  },
  find: function(coordinateX, coordinateY) {
    var searchResult;
    Space.allSpaces.forEach(function(space) {
      if(space.coordinates[0]===coordinateX && space.coordinates[1]===coordinateY) {
        searchResult = space;
      }
    });
    return searchResult;
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
  },

  checkWin: function(player) {
    var oneCounter = 0;
    var twoCounter = 0;
    var threeCounter = 0;

    this.xCoordinates.forEach(function(coordinateSet){
      if(coordinateSet[1] === 1){
        oneCounter ++;
      } else if(coordinateSet[1] === 2){
        twoCounter ++;
      } else if(coordinateSet[1] === 3){
        threeCounter ++;
      }
    });
    if(oneCounter === 3 || twoCounter === 3 || threeCounter === 3){
      this.winner = "Player X";
      return true;
    } else {
      oneCounter = 0;
      twoCounter = 0;
      threeCounter = 0;
      this.xCoordinates.forEach(function(coordinateSet){
        if(coordinateSet[0] === 1){
          oneCounter ++;
        } else if(coordinateSet[0] === 2){
          twoCounter ++;
        } else if(coordinateSet[0] === 3){
          threeCounter ++;
        }
      });
      if(oneCounter === 3 || twoCounter === 3 || threeCounter === 3){
        this.winner = "Player X";
        return true;
      } else {
         /*here is where the hard code for diagonal wins will go.  The plan is to forEach the array of coordinates, 
         then join() them into strings and push them to a temp array, then see if the three sets needed to win are present*/

      }
    }
    oneCounter = 0;
    twoCounter = 0;
    threeCounter = 0;
    this.yCoordinates.forEach(function(coordinateSet){
      if(coordinateSet[1] === 1){
        oneCounter ++;
      } else if(coordinateSet[1] === 2){
        twoCounter ++;
      } else if(coordinateSet[1] === 3){
        threeCounter ++;
      }
    });
    if(oneCounter === 3 || twoCounter === 3 || threeCounter === 3){
      this.winner = "Player Y";
      return true;
    } else {
      oneCounter = 0;
      twoCounter = 0;
      threeCounter = 0;
      this.yCoordinates.forEach(function(coordinateSet){
        if(coordinateSet[0] === 1){
          oneCounter ++;
        } else if(coordinateSet[0] === 2){
          twoCounter ++;
        } else if(coordinateSet[0] === 3){
          threeCounter ++;
        }
      });
      if(oneCounter === 3 || twoCounter === 3 || threeCounter === 3){
        this.winner = "Player Y";
        return true;
      } else {
         /*here is where the hard code for diagonal wins will go.  The plan is to forEach the array of coordinates, 
         then join() them into strings and push them to a temp array, then see if the three sets needed to win are present*/

      }
    }    
  }
};

var Game = {
  initialize: function() {
    this.board = Board.create();
    this.playerX = Player.create('X');
    this.playerO = Player.create('O');
  },
  create: function() {
    var game = Object.create(Game);
    game.initialize();
    return game;
  },

};

$(function() {
  var currentPlayer;
  var newGame;
  $('button#start-game').click(function(){
    newGame = Game.create();
    $('#game-table').show();
    $('#message-box').show();
    currentPlayer = newGame.playerX;
  });

  $('td').click(function() {
    var currentXcoordinate = $(this).index()+1;
    var currentYcoordinate = $(this).parent().index()+1;

    currentSpace = Space.find(currentXcoordinate,currentYcoordinate);

    if(currentSpace.mark === "") {
      currentSpace.markBy(currentPlayer);
      $(this).children('div').append('<span class="' + currentPlayer.symbol +'">' + currentPlayer.symbol + '</span>');
    } else {
      alert("That space is already taken, please choose another.")
      return;
    }

    if(currentPlayer == newGame.playerX) {
      newGame.board.xCoordinates.push([currentXcoordinate,currentYcoordinate]);
      currentPlayer = newGame.playerO;
    } else {
      newGame.board.oCoordinates.push([currentXcoordinate,currentYcoordinate]);
      currentPlayer = newGame.playerX;
    }

  });
});
