var btn1 = (function(module) {
module.doit = function(resultObject) {
    resultObject.prepend(Date() + '<br/>');
	};

return module;
}(btn1 ||{}));