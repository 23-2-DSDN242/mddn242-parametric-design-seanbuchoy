/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const white  = "#fffff";
const black  = "#00000";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  let posx = 5;
  let posy = 55;

  // determine parameters for first rect
  //the parameters of the other rectangles are exactly the same as this one but named differently so they're independent.
  //x size of rectangle
  let sizex1 = letterData["size"];
  //y size of rectangle
  let sizey1 = letterData["size2"];
  //x offset of rectangle
  let pos2x = 30 + letterData["offsetx"];
  //y offset of rectangle
  let pos2y = 100 + letterData["offsety"];

  // determine parameters for second rect
  let sizex2 = letterData["size3"];
  let sizey2 = letterData["size4"];
  let pos3x = 30 + letterData["offset2x"];
  let pos3y = 100 + letterData["offset2y"];

  // determine parameters for third rect
  let sizex3 = letterData["size5"];
  let sizey3 = letterData["size6"];
  let pos4x = 30 + letterData["offset3x"];
  let pos4y = 100 + letterData["offset3y"];

  // determine parameters for fourth rect
  let sizex4 = letterData["size7"];
  let sizey4 = letterData["size8"];
  let pos5x = 30 + letterData["offset4x"];
  let pos5y = 100 + letterData["offset4y"];


  //draws the barcode using a series of black rectangles with different widths and at different distances from each other
  noStroke();
  fill(0);
  rect(posx, posy-50, 10, 190);
  rect(posx+12, posy-50, 5, 190);
  rect(posx+21, posy-50, 5, 190);
  rect(posx+28, posy-50, 5, 190);
  rect(posx+37, posy-50, 10, 190);
  rect(posx+49, posy-50, 5, 190);
  rect(posx+58, posy-50, 5, 190);
  rect(posx+65, posy-50, 5, 190);
  rect(posx+74, posy-50, 5, 190);
  rect(posx+83, posy-50, 10, 190);
  rect(posx+95, posy-50, 5, 190);



  // draw white boxes with the parameters
  noStroke();
  fill(255);
  rect(pos2x, pos2y, sizex1, sizey1);
  rect(pos3x, pos3y, sizex2, sizey2);
  rect(pos4x, pos4y, sizex3, sizey3);
  rect(pos5x, pos5y, sizex4, sizey4);

  //draw red line in the middle
  strokeWeight(5);
  stroke(255, 0, 0);
  line(posx-20, posy+45, posx+120, posy+45)
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["size2"]    = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);

  new_letter["size3"]    = map(percent, 0, 100, oldObj["size3"], newObj["size3"]);
  new_letter["size4"]    = map(percent, 0, 100, oldObj["size4"], newObj["size4"]);
  new_letter["offset2x"] = map(percent, 0, 100, oldObj["offset2x"], newObj["offset2x"]);
  new_letter["offset2y"] = map(percent, 0, 100, oldObj["offset2y"], newObj["offset2y"]);

  new_letter["size5"]    = map(percent, 0, 100, oldObj["size5"], newObj["size5"]);
  new_letter["size6"]    = map(percent, 0, 100, oldObj["size6"], newObj["size6"]);
  new_letter["offset3x"] = map(percent, 0, 100, oldObj["offset3x"], newObj["offset3x"]);
  new_letter["offset3y"] = map(percent, 0, 100, oldObj["offset3y"], newObj["offset3y"]);
  
  new_letter["size7"]    = map(percent, 0, 100, oldObj["size7"], newObj["size7"]);
  new_letter["size8"]    = map(percent, 0, 100, oldObj["size8"], newObj["size8"]);
  new_letter["offset4x"] = map(percent, 0, 100, oldObj["offset4x"], newObj["offset4x"]);
  new_letter["offset4y"] = map(percent, 0, 100, oldObj["offset4y"], newObj["offset4y"]);

  return new_letter;
}

var swapWords = [
  "BARCODE",
  "MOVEMENT",
  "ETC12345"
]
