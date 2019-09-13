/*var input = document.getElementById('file_input')
*/
var seed = 534
var gridsize = 20
var zoom = -250

var lx = 0
var ly = 0
var lz = 0

var isRotating = false
var isWaving = false
var isDroping = false

var angleRot = 0
var angleWave = 0
var angleDrop = 0
var angleSpeed = 2
var angleVariation = 0
var waveOctave = 1
var offset = 0 

var backgroundColor
var grassColor
var darkGrassColor
var brightGrassColor
var waterColor
var skyColor
var desertColor
var montainColor

var canva

var canvassqrsize = 600
var rectsqrsize = 23
var heightFactor = 10
var scalablaheightfactor
var firstGridSize
var rectspace = 25
var fps = 30

var newwidth
var newheight

var cells = []



var hadFirstDraw = false


/*function preload() {
  
}*/

function setup() {
firstGridSize = gridsize

	minHeight = rectsqrsize
	backgroundColor = color(200, 200, 200)
	grassColor = color(137, 194, 132)
	darkGrassColor = color(62, 105, 90)
	brightGrassColor = color(176, 214, 135)
	waterColor = color(110, 184, 208)
	skyColor = color (180, 226, 230)
	desertColor = color(226, 237, 157)

	montainColor = color(135, 125, 125)
	
//	canva = createCanvas(canvassqrsize,canvassqrsize)
	canva = createCanvas(canvassqrsize,canvassqrsize, WEBGL)
	canva.parent('in')

	frameRate(fps)

	noiseSeed(seed)
	console.log("// noiseSeed = " + seed)

//////////////////////////////////////////////
//  noLoop()
}

function draw() {
scalablaheightfactor = heightFactor * firstGridSize / heightFactor
	background(backgroundColor)
//  	ambientLight(255, 255, 255)
	directionalLight(255, 255, 255, 0.5, 0.5, -1)
//	ortho()
//	ortho(-250, 250, -250, 250, 0, 500)

	

	angleVariation = PI / gridsize
//	offset = 0

	translate( 0, 0, zoom - ( 2 * rectsqrsize * (gridsize - 10)))
	rotateX( -PI / 4)
	rotateY( (PI / 4) + angleRot / 4 )
	rotateZ( - PI / 16 )

	//rectMode(CENTER)


	for (var x = gridsize / -2 x < gridsize / 2 x++) {

		for (var y = gridsize / -2 y < gridsize / 2 y++) {

			push()

			if (isDroping == true){
				var minD = gridsize / -2
				var maxD = width/2
				var d = dist((x * rectspace) + (gridsize * rectspace / 2) + (rectspace / 2), (y * rectspace) + (gridsize * rectspace / 2) + (rectspace / 2),gridsize * rectspace/2,gridsize * rectspace/2)
				offset = d
//				var maxD = dist(0,0, width, height)
				offset = map(d, 0, maxD, -1, 1)
		}
			//	noStroke()
			if (hadFirstDraw == true) {
				if (isWaving == true){
				var h = map(sin((angleWave + offset)), -1, 1, rectspace * scalablaheightfactor / 4, rectspace * scalablaheightfactor)
				}
				if (isDroping == true){
				var h = map(sin((angleWave + offset) * (waveOctave * 2)), -1, 1, rectspace * scalablaheightfactor / 4, rectspace * scalablaheightfactor)
				}
			} else {
				var h = rectsqrsize
			}
			translate( x * rectspace, 0,  y * rectspace)
			ambientMaterial(grassColor)
//			normalMaterial()
			box(rectsqrsize, h, rectsqrsize)
		//	console.log("Draw a square here // x: " + x + " / y: " + y)
			pop()

			}

		if (isWaving == true) {

			offset += angleVariation * (waveOctave * 2)
		}
	}


	if (isRotating == true){
		angleRot += angleSpeed / fps
	}
	if (isWaving == true){
		angleWave += angleVariation / (2 * waveOctave)
		hadFirstDraw = true
	}
	if (isDroping == true){
		angleWave += angleVariation / (4 * waveOctave)
		hadFirstDraw = true
	} else {
	}
}

function setup_seed(input) {
    seed = input.value
	console.log("// seed = " + seed)
}

function setup_sqrsize(input) {
    gridsize = input.value
	console.log("// gridsize = " + gridsize)
}

function setup_zoom(input) {
    zoom = input.value
	console.log("// zoom = " + zoom)
}

function setup_waveoctave(input) {
    waveOctave = input.value
	console.log("// waveOctave = " + waveOctave)
}

	function setup_lightx(input) {
		lx = input.value
}
	function setup_lighty(input) {
		ly = input.value
}
	function setup_lightz(input) {
		lz = input.value
}

function setup_button() {
//	setup_seed(document.getElementById(seed_input))
//	setup_sqrsize(document.getElementById(sqrsize_input))
//	setup_zoom(document.getElementById(zoom_input))
	redraw()
}

function step1a() {

	if (isRotating == true){
		isRotating = false
//		angle = 0
	} else {
		isRotating = true
//		angle = 0
	}
}

function step1b() {

	if (isWaving == true){
		isWaving = false
//		angle = 0
	} else {
		isWaving = true
		isDroping = false
//		angle = 0
	}
}

function step1c() {

	if (isDroping == true){
		isDroping = false
//		angle = 0
	} else {
		isDroping = true
		isWaving = false
//		angle = 0
	}
}