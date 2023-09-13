[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ihfjUrzT)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11538403&assignment_repo_type=AssignmentRepo)
## MDDN 242 2023 Assignment 2


BARCODE FONT
SEAN CAJILOG 300606067

Each of my letters is composed of black lines lined up to resemble a barcode as well as four white rectangles. The scale and positions of the black lines are fixed, but the locations (x and y separate) and scales (x and y separate) of the white rectangles are controlled by four parameters each.

The parameters per letter are:

  * `size` : The x size of one of the white boxes
  * `size2` : The y size of one of the white boxes
  * `offsetx` : The x offset of one of the white boxes
  * `offsety` : The y offset of one of the white boxes

  * `size3` : The x size of another one of the white boxes
  * `size4` : The y size of another one of the white boxes
  * `offset2x` : The x offset of another one of the white boxes
  * `offset2y` :The y offset of another one of the white boxes

  * `size5` : The x size of another one of the white boxes
  * `size6` : The y size of another one of the white boxes
  * `offset3x` : The x offset of another one of the white boxes
  * `offset3y` : The y offset of another one of the white boxes

  * `size7` : The x size of another one of the white boxes
  * `size8` : The y size of another one of the white boxes
  * `offset4x` : The x offset of another one of the white boxes
  * `offset4y` : The y offset of another one of the white boxes




I thought of this barcode design randomly when I was at work looking at the barcodes of peoples' access cards and noticed some bits of the barcode were torn or faded out. So I thought I'd make something that resembles a barcode and form the letters by simply removing parts from it.
First, I created the barcode itself using a series of rectangles, all with the same height but with two different widths and two different distances from each other. Then, I created four white rectangles that have x and y sizes and offsets controlled by parameters. This was the easiest way to make it appear like parts of the barcode were removed - rather than actually remove parts, I just placed the rectangles that were the same colour as the background over parts of the barcode. Initially, I only had two white rectangles but then when it came to letters with more sides and corners, I made two more. I also have a red line going along the middle. At first I only used it for reference for the centre of the barcode but I made it red and kept it there because it looks like a scanner, which matches well with what my font looks like. All the letters are pretty much comprised of straight lines and corners so all the characters are readable. The most difficult parts were letters like g, j, p, q, and y, that are supposed to go past the bottom line but I just decided to keep everything within the top and bottom margins but at the same height and going over the centre line as long as it was consistent. The letter x was also quite difficult because I didn't have enough white rectangles to block out the top half as well as put four rectangles on each side to create the x shape. What I did instead was make a capital "H" type shape in the bottom half and then put a thin white rectangle across the middle. You can still read it and tell it's an x and this ended up working because x's are associated with with crosses anyway.
Overall, my design's concept is very simple and it was very easy to execute, and I kept it under 20 parameters. If I were to do this again, I'd try having the g, j, p, q, and y actually stay under the centre line and cross the bottom margin line. However, I am satisfied with how it turned out.