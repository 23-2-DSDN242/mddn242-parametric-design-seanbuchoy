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

  // determine parameters for second circle
  let sizex1 = letterData["size"];
  let sizey1 = letterData["size2"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];


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
  fill(255, 0, 0);
  rect(50, 150, 75, 120);
  fill(black);
  rect(pos2x, pos2y, sizex1, sizey1);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["size2"]    = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
