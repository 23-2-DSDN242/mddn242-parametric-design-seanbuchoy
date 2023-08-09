const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 140,
  "size4": 70,
  "size7": 50,
  "size8": 70,
  "offsetx": 0,
  "offsety": -40,
  "offset2x": 0,
  "offset2y": 77,
}

const letterB = {
  "size": 150,
  "size4": 15,
  "size7": 40,
  "size8": 170,
  "offsetx": 0,
  "offsety": 0,
  "offset2x": -90,
  "offset2y": 0,
}

const letterC = {
  "size": 110,
  "size4": 100,
  "size7": 0,
  "size8": 0,
  "offsetx": 20,
  "offsety": 0,
  "offset2x": 0,
  "offset2y": -40,
}

const backgroundColor  = "#caf0f8";
const strokeColor      = "#03045e";

const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let size3 = letterData["size4"];
  let size5 = letterData["size7"];
  let size6 = letterData["size8"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offset2x"];
  let pos3y = posy + letterData["offset2y"];

  // draw two circles
  fill(255, 0, 0);
  ellipse(posx, posy, 150, 225);
  fill(lightBlue);
  ellipse(pos2x, pos2y, size2, size3);
  ellipse(pos3x, pos3y, size5, size6);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
