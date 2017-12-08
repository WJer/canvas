/**
 * 矩形
 * 
 * 清除矩形
 * clearRect(x,y,w,h)
 *
 * 矩形描边
 * strokeRect(x,y,w,h)
 * strokeStyle,
 * lineWidth,
 * lineJoin,
 * miterLimit
 *
 * 矩形填充
 * fillRect(x,y,w,h)
 * 
 */


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.lineWidth = 10;
ctx.lineJoin = 'round';
ctx.font = '24px Helvetica';
ctx.strokeStyle = 'goldenrod';
ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';

ctx.fillText('click anywhere to erase', 200, 200);

//描边的起点占据边的【中线位置】
ctx.strokeRect(150, 150, 200, 200);

ctx.fillRect(155, 155, 190, 190);

ctx.canvas.addEventListener('mousedown', function(e) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});


//圆角矩形的实质 = 圆角 + 矩形
