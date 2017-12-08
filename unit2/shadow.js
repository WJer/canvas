/**
 * @desc 阴影
 *
 * shadowColor: 阴影颜色
 *
 * shadowOffsetX: 阴影x轴偏移
 * shadowOffsetY: 阴影y轴偏移
 *
 * shadowBlur: 模糊化处理
 *
 * 提示：使用半透明色来设置阴影
 *
 * 注意：阴影效果比较损耗性能,原因是因为生成辅助面板比较耗时
 * 
 */

var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var canvas = document.getElementById('canvas');
var iconContext = canvas.getContext('2d');

iconContext.fillStyle = '#fff';

setIconShadow();
iconContext.fillRect(100, 100, 30, 30);

setSelectedIconShadow();
iconContext.fillRect(200, 200, 30, 30);

function setIconShadow() {
	iconContext.shadowColor = SHADOW_COLOR;
	iconContext.shadowOffsetX = -1;
	iconContext.shadowOffsetY = -1;
	iconContext.shadowBlur = 2;
}

function setSelectedIconShadow() {
	iconContext.shadowColor = SHADOW_COLOR;
	iconContext.shadowOffsetX = 4;
	iconContext.shadowOffsetY = 4;
	iconContext.shadowBlur = 5;
}

