var btn1 = (function(module) {
module.doit = function(resultObject) {
    resultObject.prepend(date() + '<br/>');
	};

return module;
}(btn1 ||{}));