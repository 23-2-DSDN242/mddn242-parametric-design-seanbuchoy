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
  let sizex1 = letterData["size"];
  let sizey1 = letterData["size2"];
  let pos2x = 30 + letterData["offsetx"];
  let pos2y = 100 + letterData["offsety"];

  // determine parameters for second rect
  let sizex2 = letterData["size3"];
  let sizey2 = letterData["size4"];
  let pos3x = 30 + letterData["offset2x"];
  let pos3y = 100 + letterData["offset2y"];


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

  // draw two circles
  fill(255);
  rect(pos2x, pos2y, sizex1, sizey1);
  rect(pos3x, pos3y, sizex2, sizey2);
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
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
