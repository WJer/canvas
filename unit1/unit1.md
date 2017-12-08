# 第一章

## canvas元素

1. canvas元素的内容部分所包含的文本叫做 `后备内容` ，当浏览器不支持canvas元素时才会显示该内容。

```
	<canvas id="canvas">
		Browser dont support canvas!
	</canvas>
```

2. canvas的大小分为元素本身的大小和绘图表面的大小。它们的默认值是 `350 * 150` 。
通过html属性设置的大小是两者同时设置，而通过css样式设置的大小仅仅设置了元素本身的大小。

3. 设置大小的后缀不能是px。

4. width、height、getContext()、toDataURL(type,quality)、toBlob(callback,type,quality)(type默认是image/png)

## canvas的绘图环境

1. save() 保存canvas的所有属性
2. restore() 恢复到保存的结点上

用户代理（简称UA）指的是实现canvas的应用程序，例如浏览器。

缩略网址！！

## html5相关

1. requestAnimationFrame() 替换 setInterval() 和 setTimeout()。
2. console.profile() 和 console.profileEnd() 设定性能分析的节点。
3. 性能分析器profile 与 时间轴工具timeline


