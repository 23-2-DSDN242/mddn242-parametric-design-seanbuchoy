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
size: 120,
size4: 70,
offsetx: 20,
offsety: 95,

size7: 130,
size8: 20,
offset2x: 0,
offset2y: 180,

size10: 165,
size12: 125,
offset3x: -20,
offset3y: -50,
}

const letterB = {
  size: 140,
  size4: 125,
  offsetx: 25,
  offsety: -50,
  
  size7: 110,
  size8: 85,
  offset2x: 30,
  offset2y: 95,

  size10: 0,
  size12: 0,
  offset3x: 120,
  offset3y: 210,
}

const letterC = {
  size: 165,
  size4: 125,
  offsetx: 0,
  offsety: -50,
  
  size7: 135,
  size8: 85,
  offset2x: 30,
  offset2y: 95,
}

const backgroundColor  = "#fff";
const strokeColor      = "#000000";

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
  let size9 = letterData["size10"];
  let size11 = letterData["size12"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offset2x"];
  let pos3y = posy + letterData["offset2y"];
  let pos4x = posy + letterData["offset3x"];
  let pos4y = posy + letterData["offset3y"];

  // draw two circles
  fill(0, 0, 0);
  noStroke();

  fill(0, 0, 0);
  noStroke();
  rect(posx, posy-50, 15, 250);
  rect(posx+20, posy-50, 5, 250);
  rect(posx+35, posy-50, 5, 250);
  rect(posx+45, posy-50, 5, 250);
  rect(posx+60, posy-50, 15, 250);
  rect(posx+80, posy-50, 5, 250);
  rect(posx+95, posy-50, 5, 250);
  rect(posx+110, posy-50, 5, 250);
  rect(posx+125, posy-50, 5, 250);
  rect(posx+140, posy-50, 15, 250);
  rect(posx+160, posy-50, 5, 250);
  

  // rect(posx, posy, 5, 225);
  // rect(posx+10, posy, 15, 225);
  // rect(posx+30, posy, 5, 225);
  // rect(posx+45, posy, 5, 225);
  // rect(posx+55, posy, 15, 225);
  // rect(posx+80, posy, 15, 225);
  // rect(posx+100, posy, 5, 225);
  // rect(posx+115, posy, 5, 225);
  // rect(posx+125, posy, 5, 225);

  
  fill(255);
  noStroke();
  rect(pos2x, pos2y, size2, size3);
  rect(pos3x, pos3y, size5, size6);
  rect(pos4x, pos4y, size9, size11);
  // draw lines

}




function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
