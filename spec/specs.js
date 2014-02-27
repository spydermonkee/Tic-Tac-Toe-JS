describe('Player', function() {
  describe('initialize', function() {
    it('sets the players symbol to X or O', function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });

  describe('create', function() {
    it('creates a Player object', function() {
      var testPlayer = Player.create();
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
    it('initializes the player with the symbol passed to it', function(){
      var testPlayer = Player.create('X');
      testPlayer.symbol.should.equal('X');
    })
  });
});

beforeEach(function(){
  Space.allSpaces = [];
});

describe('Space', function() {
  describe('markBy', function() {
    it('sets the mark attribute equal to the mark attribute of the player who marked it', function() {
      var testSpace = Object.create(Space);
      var testPlayer = Player.create("X");
      testSpace.markBy(testPlayer);
      testSpace.mark.should.equal("X");
    });
  });

  describe('create', function() {
    it('creates a space object', function() {
      var testSpace = Space.create();
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
    it('initializes the space object with coordinates passed to it', function() {
      var testSpace = Space.create([1,2]);
      testSpace.coordinates.should.eql([1,2]);
    });
    it('pushes the new space instance to the allSpace array', function(){
      var testSpace = Space.create([1,2]);
      testSpace.allSpaces.should.eql([testSpace]);
    });
  });

  describe('initialize', function() {
    it('sets the space object coordinates with the coordinates passed to it', function() {
      var testSpace = Object.create(Space);
      testSpace.initialize([2,3]);
      testSpace.coordinates.should.eql([2,3]);
    });
  });
});

describe('Board', function(){
  describe('create', function(){
    it('creates a new Board object instance', function(){
      var testBoard = Board.create();
      Board.isPrototypeOf(testBoard);
    });
    it('creates 9 spaces and sets the spaces array equal to the Space.allSpaces array', function(){
      var testBoard = Board.create();
      testBoard.spaces.should.eql(Space.allSpaces);
      testBoard.spaces.length.should.equal(9);
    });
  });
  describe('initialize', function() {
    it('should create arrays for x-coordinates, y-coordinates, and all spaces', function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.spaces.should.eql([]);
      testBoard.xCoordinates.should.eql([]);
      testBoard.oCoordinates.should.eql([]);
    });

  });
});
