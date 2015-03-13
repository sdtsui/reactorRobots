var base_convert = function(number, from_base, to_base){
  return parseInt(number, from_base || 10).toString(to_base || 10);
};

var _DIRHASH = {
  "north" : 16,
  "south" : 8,
  "east"  : 4,
  "west"  : 2
};

/**
 * Adds walls to a square.
 * @param {[number]} square    [is a binary representation of square state]
 * @param {[string]} direction [key of _DIRHASH, to add the right wall]
 */
var addWall = function(square, direction){
  var modifiedSquare = _DIRHASH.hasOwnProperty(direction) ? square | _DIRHASH[direction] : "Direction Error";
  console.log("Modified Square: ", modifiedSquare);
  return modifiedSquare;
}

var boardHash = {

};

console.log('for loop start');
for (var i = 0 ; i < 256; i++){
  var newSquare = 0;

  if ( 0 < i && i < 16){ // north side
    newSquare = addWall(newSquare, 'north');
  } 
  if ( i % 16 === 0){ // east side
    newSquare = addWall(newSquare, 'east');
  }
  if ( i % 15 === 0){ //west side
    newSquare = addWall(newSquare, 'west');
  }
  if (240 <= i  && i <256){ //south side
    newSquare = addWall(newSquare, 'south');
  }
  boardHash[i] = base_convert(newSquare, 10, 2);
};

console.log(boardHash);