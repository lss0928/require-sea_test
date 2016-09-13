define(function(require,exports,module){
	console.log("require mian:index");
	require('jquery');//引入jq
	var mod1 = require('mod1');//引入mod1
		mod1.hello();
	var mod2 = require('mod2');//引入mod1
		mod2.hello();
	$('body').css("background",'red');
	return {
		hello:function(){
			console.log('hello index')
		}
	}
})


/*
懒执行：严格按照require顺序执行
require mian:index

require mian:mod1
hello mod1

require mian:mod2
hello mod2

*/