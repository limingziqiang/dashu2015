

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
		'height',
		'lineHeight'
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
	
	//console.log(iScale);
	
	var len = elements.length;
	
	//临时变量
	var iCurrent,isplit;
	
	for(; i < len; i++){
	
		
		if(elements[i].nodeType==1 && elements[i].tagName && elements[i].nodeName!="SCRIPT" && elements[i].nodeName!="STYLE"){
			
			for(var j = 0; j < myarr.length; j++)
			{
				iCurrent = 	getCurrentStyle(elements[i],myarr[j]);

				if(!isNaN(iCurrent.substring(0,1))) 
				{
					isplit = iCurrent.match(/[a-zA-Z]+/);
					
					if(getCurrentStyle(elements[i],'backgroundImage')!='none')
					{
						elements[i].style.zoom = iScale;	
					} else {
						elements[i].style[myarr[j]] = ''+ iScale * parseInt(iCurrent) + isplit[0];
					}
				}
				
				
			}
		}
	}


