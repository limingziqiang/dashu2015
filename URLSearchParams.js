export function urlParse(){
	let localurl = window.location.search;

	let oParam = window.URLSearchParams;


	let obj = {};

    if(oParam){

    	let searchParams = new URLSearchParams(localurl);
        for(let pair of searchParams.entries()){
           //console.log(pair[0]+ ', '+ pair[1]); 
           obj[pair[0]] = pair[1];
    	}
    	return obj;
	}

	let reg = /[?&][^?$]+=[^?&]+/g;

	let arr = url.match(reg);

	if(arr){
		arr.forEach((item)=>{
			let tempArr = item.subString(1).split('=');
			let key = decodeURIComponent(tempArr[0]);
			let val = decodeURIComponent(tempArr[1]);
			obj[key]=val;
		});
	}

	return obj;
}
