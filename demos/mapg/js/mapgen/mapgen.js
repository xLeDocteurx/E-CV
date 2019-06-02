/*var input = document.getElementById('file_input');
*/

var terrainEnum = {
	all: "all",
	island: "island",
	islands: "islands",
	plain: "plain",
	plain_river: "plain_river",
};
var terrainType = terrainEnum.island;

var numberOfCellsTypes = 6;
//var widthC = 42;
//var heightC = 24;
var widthC = 63;
var heightC = 36;
var margin = 0;
var seed = 4321;

var noiseScale = 0.15;
var noiseOctave = 0.5;

var neighboorsToBeAlive = 5;

var grid;

var cellsSize = 10;
var cellColor;

var fps = 30;
var canvasSizeX;
var canvasSizeY;


/*
var maxHeight = 100;
var zoom = 500; */


//var backgroundColor;
var waterColor;
var lightWaterColor;
var sandColor;
var grassColor;
//var darkGrassColor;
var brightGrassColor;
var montainColor;
var darkMontainColor;
var snowColor;

var cellsType;	 



var canva;

/*function preload() {
  
}*/

function setup() {

	noiseSeed(seed);
	noiseDetail(4, noiseOctave);
	
//	backgroundColor = color(200, 200, 200);

	waterColor = color(110, 184, 208);
	lightWaterColor = color (180, 226, 230);
	
	sandColor = color(226, 237, 157);

	grassColor = color(137, 194, 132);
	brightGrassColor = color(176, 214, 135);
//	darkGrassColor = color(62, 105, 90);

	montainColor = color(135, 125, 125);
	darkMontainColor = color(115, 105, 105);
	snowColor = color(255, 255, 255);

	dummyColor = color(0,0,0);

	cellsType = [waterColor, lightWaterColor, sandColor, brightGrassColor, grassColor, montainColor, darkMontainColor, snowColor];
//	cellsType = [dummyColor snowColor, montainColor, grassColor, brightGrassColor, sandColor, lightWaterColor, waterColor];





	canvasSizeX = widthC * cellsSize;
	canvasSizeY = heightC * cellsSize;
	canva = createCanvas(canvasSizeX,canvasSizeY);
//	canva = createCanvas(canvasSizeX,canvasSizeY, WEBGL);
//	canva = createCanvas(500,500, WEBGL);
	canva.parent('in');

//	noiseSeed(seed);

//////////////////////////////////////////////
//	frameRate(fps);
  // noLoop();
//////////////////////////////////////////////
}

function draw() {

	var collums = new Array(widthC);
//	console.log("// Number of collums = " + collums.length);

	for (var x = 0; x < widthC; x++) {

		var rows = new Array(heightC);
		collums[x] = rows;
//		console.log("// Number of rows in collum n°" + x + " = " + rows.length);

		for (var y = 0; y < heightC; y++) {

			rows[y] = cellBirth(x,y);
		}
	}

	grid = collums;

//	console.log("// Number of cells in grid = " + grid.length);
//	console.table(grid);
	cellsDraw();
	marginDraw();
}

function cell(state, alive_neighboors) {

	this.state = state;
	this.alive_neighboors = alive_neighboors;
}

function cellBirth(x,y) {

//	var state = floor(random(2));
	var state = noise((x+1) * noiseScale, (y+1) * noiseScale);
	var alive_neighboors = 0;
	var newCell = new cell(state, alive_neighboors);

	return newCell;
}

function cellsDraw() {

	console.log("CellsDraw();");

//	translate( -widthC * cellsSize * 2, 0, -heightC * cellsSize / 2);
//	background(backgroundColor);
//	directionalLight(255, 255, 255, 0.5, 0.5, -1);
//	ambientLight(255);

//	rotateX( -PI / 4);
//	rotateY(  PI / 4);
//	rotateZ( - PI / 16 );

	for (var x = 0; x < widthC; x++) {
		for (var y = 0; y < heightC; y++) {

//push();

/*
			var n = noise((x + 1) * noiseScale,(y + 1) * noiseScale) * 255;
			newN = round(n / 255 * numberOfCellsTypes - 1) * (255 / numberOfCellsTypes - 1);
//			var h = noise ((x +1) * noiseScale, (y + 1) * noiseScale) * maxHeight;
			cellColor = color(newN);
*/

//////////////////////////////////////////////////////////////////
//			cellColor = color(grid[x][y].state * 255);
//////////////////////////////////////////////////////////////////
			var plage = 1 / cellsType.length;

			for (var i = 0; i < cellsType.length; i++) {

				if (grid[x][y].state >= i * plage && grid[x][y].state <= (i +1) * plage) {
  	  
					cellColor = cellsType[i];
//					console.log("// cellColor : " + cellColor);
				}
			}

//	      	noStroke();

//			cellColor = color((1 - grid[x][y].state) * 255);
			fill(cellColor);
			rect(x * cellsSize, y * cellsSize, cellsSize, cellsSize);


/* translate(x * cellsSize, -h, y * cellsSize);
ambientMaterial(n);
//normalMaterial();
box(cellsSize, h, cellsSize);
pop(); */



/*
		    var state;
	    	var alive_neighboors;
		    if (red(cellColor) <  127) {
		      state = 1;
		    } else {
		      state = 0;
		    }
		    cells[cells.length] = [x, y, state, alive_neighboors];
*/

			}
	}

}

function marginDraw() {

	console.log("marginDraw();");

	// margin var

	for (var x = 0; x < widthC; x++) {
		for (var y = 0; y < heightC; y++) {

			var plage = 1 / cellsType.length;

			if (x < margin || y < margin) {
				grid[x][y].state = 0;
				cellColor = cellsType[0];

			fill(cellColor);
			rect(x * cellsSize, y * cellsSize, cellsSize, cellsSize);
			}
			if (x >= widthC - margin || y >= heightC - margin) {
				grid[x][y].state = 0;
				cellColor = cellsType[0];

			fill(cellColor);
			rect(x * cellsSize, y * cellsSize, cellsSize, cellsSize);
			}

		}
	}
}

function checkForNeighboors() {

	for (var x = 0; x < widthC; x++) {
		for (var y = 0; y < heightC; y++) {



	    var alive_neighboors = grid[x - 1][y - 1].state
	    					 + grid[x][y - 1].state 
	    					 + grid[x + 1][y - 1].state  
	    					 + grid[x - 1][y].state  
	    					 + grid[x + 1][y].state  
	    					 + grid[x - 1][y + 1].state  
	    					 + grid[x][y + 1].state  
	    					 + grid[x + 0][y + 1].state ;

	    grid[x][y].alive_neighboors = alive_neighboors;
		}
	}

}

function goToNextGeneration() {

    var black = color(0,0,0);
    var white = color(255,255,255);
    var newcolor;

  // Update de la cellule

  for (var i = 0; i < cells.length; i++) {
//  for each (var cell in cells) {
    
    var state = cells[i][2];
    var alive_neighboors = cells[i][3];

    if (state == 0 && alive_neighboors == 3) {
      state = 1;
    } else if (state == 1 && alive_neighboors < 2) {
      state = 0;
    } else if (state == 1 && alive_neighboors > 3) {
      state = 0;
    } /* else if (state = 1) {
      if (alive_neighboors == 3) {
        state = 1;
      }
      else if (alive_neighboors == 3) {
        state = 1;
      }
    } */
    if (state == 1) {
      newcolor = black;
    } else {
      newcolor = white;
    }
    fill(newcolor);
//    noStroke();
    rect(cells[i][0], cells[i][1], cellsSize, cellsSize);



    cells[i][2] = state;
    cells[i][3] = alive_neighboors;
  }

cellsDraw();

}

function setup_terrain(input) {

    terrainType = input.value;
}

function setup_numberOfCellsTypes(input) {

    numberOfCellsTypes = input.value /*- 1*/;
//	console.log("// numberOfCellsTypes = " + numberOfCellsTypes);
}

function setup_xsize(input) {

    widthC = input.value;
}

function setup_ysize(input) {

    heightC = input.value;
}

function setup_margin(input) {

    seed = input.value;
}

function setup_seed(input) {

    seed = input.value;
	noiseSeed(seed);
//    console.log("// Seed : " + seed);
}

function setup_noiseScale(input) {

	noiseScale = input.value / 100;

	document.getElementById('scale_input').value = noiseScale;
//	console.log("// noiseOctave = " + noiseOctave);
//	console.log("// noiseScale = " + noiseScale);
}

function setup_noiseOctave(input) {

	noiseOctave = input.value / 100;
	noiseDetail(4, noiseOctave);

	document.getElementById('octave_input').value = noiseOctave;
//	console.log("// noiseOctave = " + noiseOctave);
//	console.log("// noiseOctave = " + noiseOctave);
}

function redraw_button() {

	canvasSizeX = widthC * cellsSize;
	canvasSizeY = heightC * cellsSize;
	resizeCanvas(canvasSizeX,canvasSizeY);

	redraw();
	console.log(" --- has redraw --- ");
}

function step1a() {

	checkForNeighboors();
}

function step1b() {

	goToNextGeneration();
}

function step1c() {

	checkForNeighboors();
	goToNextGeneration();
}