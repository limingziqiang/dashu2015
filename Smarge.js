/**

 * @name Smarge 

 * @author crazymus < QQ:291445576 >

 * @des A cache framework base on HTML5 localstorage.

 * @version 1.0.0

 * @Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )

 * @updated 2015-08-10

 */
var Smarge = {
	db:'SMARGE0',
	use:function(index){
		if(index<0 || index>16){
			console.log('warning:0-16 is legal.');
			return ;
		}
		this.db = 'SMARGE'+index;
	},
	set:function(key,value,expire){
		var data;
		if(localStorage[this.db]){
			data = JSON.parse(localStorage[this.db]);
		}else{
			data = {};
		}
		var d = new Date();
		var obj = {
			value:JSON.stringify(value),
			time:(d.getTime()/1000).toFixed(0),
			expire:expire?expire:0
		};
		
		data[key] = obj;
		localStorage[this.db] = JSON.stringify(data);
	},
	get:function(key){
		var data;
		if(localStorage[this.db]){
			data = JSON.parse(localStorage[this.db]);
		}else{
			return undefined;
		}
		if(!data[key]){
			return undefined;
		}
		var obj = data[key];
		if(obj.expire>0){
			//检查过期时间 


			if(this._getTime() - obj.time > obj.expire){
				data[key] = undefined;
				localStorage[this.db] = JSON.stringify(data);
				return undefined;
			}
		}
		return JSON.parse(data[key].value);
	},
	drop:function(index){
		localStorage['SMARGE'+index] = "";
	},
	//获取当前时间戳


	_getTime:function(){
		var d = new Date();
		return (d.getTime()/1000).toFixed(0);
	}
};
