/**
 * 剪纸效果
 *
 * 这个图像感觉阴影在圆圈的上方的原因是因为图像设置了透明度。
 *
 * 有一条线？
 * arc()必须将上一条自路径的终点与所化圆弧的起点相连；
 * 如何解决
 * 使用beginPath()清除已有的子路径
 */

var context = document.getElementById('canvas').getContext('2d');

context.fillStyle = 'rgba(100, 140, 230, 0.5)';
context.strokeStyle = context.fillStyle;

draw();

function draw() {
	context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	context.save();
	// context.shadowColor = 'rgba(0,0,0,0.8)';
	context.shadowColor = 'rgba(200,200,0,0.5)';
	context.shadowOffsetX = 12;
	context.shadowOffsetY = 12;
	context.shadowBlur = 15;
	// drawTwoArcs();
	drawCutouts();
	context.restore();
}

function drawTwoArcs() {
	context.beginPath();
	context.arc(300, 190, 150, 0, Math.PI*2, false);
	context.arc(300, 190, 100, 0, Math.PI*2, true);

	context.fill();

	context.shadowColor = undefined;
	context.shadowOffsetX = 0;
	context.shadowOffsetY = 0;

	context.stroke();
}

function drawCutouts() {
	context.beginPath();
	addOuterRectPath();
	addCirclePath();
	addRectPath();
	addTrianglePath();
	// strokeCutoutShapes();
	context.fill();
}

function strokeCutoutShapes() {
	context.save();

	context.strokeStyle = 'rgba(0,0,0,0.7)';
	context.beginPath();
	addOuterRectPath();
	context.stroke();
}

function addOuterRectPath() {
	context.rect(110, 25, 370, 335);
}

function addCirclePath() {
	context.arc(300,300,40,0,Math.PI*2,true);
}

function addRectPath() {
	rect(310,55,70,35,true);
}

function addTrianglePath() {
	context.moveTo(400,200);
	context.lineTo(250,115);
	context.lineTo(200,200);
	context.closePath();
}

function rect(x, y, w, h, direction) {
	if(direction) {
		context.moveTo(x, y);
		context.lineTo(x, y+h);
		context.lineTo(x+w, y+h);
		context.lineTo(x+w, y);
		context.closePath();
	}else{
		context.moveTo(x, y);
		context.lineTo(x+w, y);
		context.lineTo(x+w, y+h);
		context.lineTo(x, y+h);
		context.closePath();
	}
}

context.fillStyle = 'goldenrod';