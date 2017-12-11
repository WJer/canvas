/**
 * 线段
 * moveTo() 不会清除子路径
 * lineTo()
 *
 * beginPath()会以moveTo()的点为起点
 *
 * 注意：
 * 线段当绘制在整数的点时，线段的宽度会被扩展到占据两个像素；
 * 如果想绘制真正的1像素线段，就要绘制在x.5的位置。
 *
 * 坐标轴的绘制代码省略（P73）
 * 
 */
// var context = document.getElementById('canvas').getContext('2d');

// drawTwoLine();
// drawGrid(context, 'lightgray', 10, 10);

function drawTwoLine() {

	context.lineWidth = 0.5;

	context.beginPath();
	context.moveTo(50, 0.5);
	context.lineTo(250, 0.5);
	context.moveTo(251, 0.5);
	context.lineTo(450, 0.5);
	context.lineTo(450, 100);
	context.closePath();
	context.stroke();


	context.beginPath();
	context.moveTo(50, 50);
	context.lineTo(450, 50);
	context.stroke();
}


function drawGrid(context, color, stepx, stepy, showPos) {

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

