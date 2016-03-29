var myarr = [
	'fontSize',
	'marginLeft',
	'marginTop',
	'marginRight',
	'marginBottom',
	'paddingLeft',
	'paddingTop',
	'paddingRight',
	'paddingBottom',
	'left',
	'top',
	'right',
	'bottom',
	'width',
	'height'
];

var getCurrentStyle = function(element,attr){
	if(window.getComputedStyle) {
		return window.getComputedStyle(element,null)[attr];	
	} else {
		return element.currentStyle[attr];	
	}
};

var fnScale = function(obj){
	return  document.documentElement.clientWidth / obj.offsetWidth;	
};

var i = 0;
var elements = document.body.getElementsByTagName('*');
var iScale = (fnScale(document.getElementById('box')));
var len = elements.length;


for(; i < len; i++){

	if(elements[i].nodeType==1 && elements[i].nodeName!="SCRIPT"){

		for(var j = 0; j < myarr.length; j++)
		{
			console.log(elements[i].style[myarr[j]]= iScale*parseInt(getCurrentStyle(elements[i],myarr[j]))+'px');
		}
	}
}
