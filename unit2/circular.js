/**
 * 圆
 *
 * arc(x, y, radius, deg, deg, direction)
 *
 * arcTo(x1, y1, x2, y2, radius)
 * 绘制矩形的圆角
 *
 * 
 */

drawGrid(context, 'lightgray', 10, 10);

function roundedRect(cornerX, cornerY, width, height, cornerR) {
	context.moveTo(cornerX + (width > 0 ? 1 : -1) * cornerR, cornerY);
	context.arcTo(cornerX + width, cornerY, cornerX + width, cornerY + height, cornerR);
	context.arcTo(cornerX + width, cornerY + height, cornerX, cornerY + height, cornerR);
	context.arcTo(cornerX, cornerY + height, cornerX, cornerY, cornerR);
	context.arcTo(cornerX, cornerY, cornerX + (width > 0 ? 1 : -1) * cornerR, cornerY, cornerR);
}

function drawRoundedRect(strokeStyle, fillStyle, cornerX, cornerY, width, height, cornerR) {
	context.beginPath();
	roundedRect(cornerX, cornerY, width, height, cornerR);
	context.strokeStyle = strokeStyle;
	context.fillStyle = fillStyle;

	context.stroke();
	context.fill();
}

drawRoundedRect('blue', 'yellow', 50, 40, 100, 100, 10);
drawRoundedRect('purple', 'green', 275, 40, -100, 100, 20);
drawRoundedRect('red', 'white', 300, 140, 100, -100, 30);
drawRoundedRect('white', 'blue', 525, 140, -100, -100, 40);
