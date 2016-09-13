//配置路径和别名
seajs.config({
	base:'http://localhost/shixun/requireJS&seaJS/seaJs',
	alias:{
		jquery:'./jquery',
		mod1:'./mod1',
		mod2:'./mod2'
	}
})


seajs.use('index');