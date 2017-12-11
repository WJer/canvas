/**
 * 虚线和点划线 自实现
 *
 * 田字格
 *
 * context instanceof CanvasRenderingContext2D
 *
 * 元编程、猴子补丁、方法覆盖：重写原型中的方法。
 *
 * 1. lineWidth
 *
 * 2. lineCap: butt|round|square
 * round会多画一个半圆(r=lineWidth/2)，square会多画一个矩形（长=lineWidth,宽=lineWidth/2）
 *
 * 3. lineJoin: round|bevel|miter
 *
 * 4. miterLimit: 斜接线的长度 = 1/2线宽 * miterLimit
 * 如果斜接线的长度太长，则将以bevel的形式处理结合处。
 * 
 */

var ctx = document.getElementById('canvas').getContext('2d');

function drawDashedLine(context, x1, y1, x2, y2, dashLength) {
	dashLength || (dashLength = 5);

	var deltaX = x2 - x1;
	var deltaY = y2 - y1;

	var numDashes = Math.floor(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / dashLength);

	for(var i = 0; i < numDashes; i++) {
		context[ i % 2 == 0 ? 'moveTo' : 'lineTo'](x1 + (deltaX / numDashes) * i, y1 + (deltaY / numDashes) * i);
	}

	context.stroke();
}

ctx.lineWidth = 3;

drawDashedLine(ctx, 20, 20, 20, 300);
drawDashedLine(ctx, 20, 300, 300, 300);
drawDashedLine(ctx, 300, 20, 300, 300);
drawDashedLine(ctx, 20, 20, 300, 20);

drawDashedLine(ctx, 20, 20, 300, 300);
drawDashedLine(ctx, 300, 20, 20, 300);

drawDashedLine(ctx, 160, 20, 160, 300);
drawDashedLine(ctx, 20, 160, 300, 160);