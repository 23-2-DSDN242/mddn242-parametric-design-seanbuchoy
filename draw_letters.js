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
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  scale(1);
  noStroke();
  fill(0);
  rect(posx, posy-50, 10, 190);
  rect(posx+13, posy-50, 5, 190);
  rect(posx+35, posy-50, 5, 190);
  rect(posx+45, posy-50, 5, 190);
  rect(posx+60, posy-50, 15, 190);
  rect(posx+80, posy-50, 5, 190);
  rect(posx+95, posy-50, 5, 190);
  rect(posx+110, posy-50, 5, 190);
  rect(posx+125, posy-50, 5, 190);
  rect(posx+140, posy-50, 15, 190);
  rect(posx+160, posy-50, 5, 190);

  // draw two circles
  fill(255, 0, 0);
  rect(50, 150, 75, 120);
  fill(black);
  rect(pos2x, pos2y, size2, size2);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
