/**
 * 橡皮筋
 *
 * getImageData() 返回每个像素的rgb数据
 * 
 * return {
 * 		data:[r,g,b,r,g,b,...],
 * 		width: number,
 * 		height: number
 * }
 */

var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	eraseAllButton = document.getElementById('eraseAllButton'),
	strokeStyleSelect = document.getElementById('strokeStyleSelect'),
	guidewireCheckbox = document.getElementById('guidewireCheckbox'),
	drawingSurfaceImageData,
	mousedown = {},
	rubberbandRect = {},
	dragging = false,
	standard = false;
	guidewires = guidewireCheckbox.checked;

context.strokeStyle = strokeStyleSelect.value;
drawGrid(context, 'lightgray', 10, 10);

canvas.addEventListener('mousedown', function(e) {
	var loc = windowToCanvas(e.clientX, e.clientY);

	e.preventDefault();
	saveDrawingSurface();
	mousedown.x = loc.x;
	mousedown.y = loc.y;
	dragging = true;
});

canvas.addEventListener('mouseup', function(e) {
	var loc = windowToCanvas(e.clientX, e.clientY);
	restoreDrawingSurface();
	updateRubberband(loc);
	dragging = false;
});

canvas.addEventListener('mousemove', function(e) {
	var loc;
	if(dragging) {
		e.preventDefault();
		loc = windowToCanvas(e.clientX, e.clientY);
		restoreDrawingSurface();
		updateRubberband(loc);
		if(guidewires) {
			drawGuidewires(loc.x, loc.y);
		}
	}
});

canvas.addEventListener('mouseout', function() {
	if(dragging) {
		dragging = false;
		restoreDrawingSurface();
	}
});

eraseAllButton.addEventListener('click', function(e) {
	context.clearRect(0, 0, canvas.width, canvas.height);
});

guidewireCheckbox.addEventListener('change', function(e) {
	guidewires = e.target.checked;
});

strokeStyleSelect.addEventListener('change', function(e) {
	context.strokeStyle = e.target.value;
});

// document.addEventListener('keydown', function(e) {
// 	//shift
// 	if(e.keyCode == 16) {
// 		standard = true;
// 		restoreDrawingSurface();
// 		updateRubberband(loc, standard);
// 	}
// });
// document.addEventListener('keyup', function(e) {
// 	standard = false;
// 	if(dragging) {
// 		restoreDrawingSurface();
// 		updateRubberband(loc, standard);
// 	}
// });

//画网格
function drawGrid(context, color, stepx, stepy) {

	context.save();

	context.strokeStyle = color;
	context.lineWidth = 0.5;

	for(var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
		context.beginPath();
		context.moveTo(i, 0);
		context.lineTo(i, context.canvas.height);
		context.stroke();
	}

	for(var j = stepy + 0.5; j < context.canvas.height; j += stepy) {
		context.beginPath();
		context.moveTo(0, j);
		context.lineTo(context.canvas.width, j);
		context.stroke();
	}
	context.restore();
}

//question? canvas.width / bbox.width?
function windowToCanvas(x, y) {
	var bbox = canvas.getBoundingClientRect();
	return {
		x: x - bbox.left * (canvas.width / bbox.width),
		y: y - bbox.top * (canvas.height / bbox.height)
	}
}

function saveDrawingSurface() {
	drawingSurfaceImageData = context.getImageData(0, 0, canvas.width, canvas.height);
}

function restoreDrawingSurface() {
	context.putImageData(drawingSurfaceImageData, 0, 0);
}

function updateRubberband(loc) {
	updateRubberbandRectangle(loc);
	drawRubberbandShape(loc);
	// drawRect();
}

function updateRubberbandRectangle(loc) {
	rubberbandRect.width = Math.abs(loc.x - mousedown.x);
	rubberbandRect.height = Math.abs(loc.y - mousedown.y);
	if(loc.x > mousedown.x) {
		rubberbandRect.left = mousedown.x;
	}else{
		rubberbandRect.left = loc.x
	}
	if(loc.y > mousedown.y) {
		rubberbandRect.top = mousedown.y;
	}else{
		rubberbandRect.top = loc.y
	}
}

function drawRubberbandShape(loc){
	context.beginPath();
	context.moveTo(mousedown.x, mousedown.y);
	context.lineTo(loc.x, loc.y);
	context.stroke();
}

function drawRect(loc){
	context.strokeRect(mousedown.x, mousedown.y, rubberbandRect.width, rubberbandRect.height);
}

function drawGuidewires(x, y) {
	context.save();
	context.strokeStyle = 'rgba(0,0,230,.4)';
	context.lineWidth = 1;
	drawVerticalLine(x);
	drawHorizontalLine(y);
	context.restore();
}

function drawVerticalLine(x) {
	context.beginPath();
	context.moveTo(x + 0.5, 0);
	context.lineTo(x + 0.5, canvas.height);
	context.stroke();
}

function drawHorizontalLine(y) {
	context.beginPath();
	context.moveTo(0, y + 0.5);
	context.lineTo(canvas.width, y + 0.5);
	context.stroke();
}
