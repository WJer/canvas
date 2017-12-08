/**
 * 渐变色和图案
 *
 * 渐变色：
 * 
 * //线性渐变
 * createLinearGradient(x, y, x, y)
 *
 * //放射渐变
 * createRadialGradient(x, y, r, x, y, r)
 * 
 * addColorStop(cs, color)
 *
 * 图案：
 * 
 * image元素、canvas元素、video元素
 * 
 * createPattern(pattern, repeat);
 * 
 */

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var gradient1 = ctx.createLinearGradient(0, 0, 100, 0);

gradient1.addColorStop(0, 'red');
gradient1.addColorStop(.25, 'purple');
gradient1.addColorStop(.5, 'white');
gradient1.addColorStop(.75, 'green');
gradient1.addColorStop(1, 'blue');

ctx.fillStyle = gradient1;
ctx.fillRect(0, 0, canvas.width/2, canvas.height/2);

var gradient2 = ctx.createRadialGradient(canvas.width/2, canvas.height, 10, canvas.width/2, 0, 100);

gradient2.addColorStop(0, 'blue');
gradient2.addColorStop(.25, 'white');
gradient2.addColorStop(.5, 'purple');
gradient2.addColorStop(.75, 'red');
gradient2.addColorStop(1, 'yellow');

ctx.fillStyle = gradient2;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.clearRect(0, 0, canvas.width, canvas.height);

