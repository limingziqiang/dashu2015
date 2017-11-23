var pluszero = function(d){
  if(d<10)
  {
    d = "0"+d;
  }
  return d;
};

var gId = function(id){
  return document.getElementById(id);
};

var GetRTime = function(iTime){

      var StartTime = new Date('2016/05/01 00:00:00');
      var EndTime = new Date('2016/06/01 00:00:00');
      var t = EndTime.getTime() - iTime;
      var d=0;
      var h=0;
      var m=0;
      var s=0;

      // 活动未开始
	  
	
      if(StartTime.getTime() > iTime)
      {
        $('.ds_limit_time').html('<strong style="font-size:40px; color:#d4172d;">活动未开始</strong>').css({"background-color":"#fdd000"});
        //活动未开始
        return false;
      } 
      if(iTime > EndTime.getTime()) {

        $('.ds_limit_time').html('<strong style="font-size:40px; color:#d4172d;">活动已结束</strong>').css({"background-color":"#fdd000"});
        //活动已结束
        return false;
      }
	  
	  

      //$('.ds_limit_time').css('padding-top',0);

      var setTime = function(){
          d=Math.floor(t/1000/60/60/24);
          h=Math.floor(t/1000/60/60%24);
          m=Math.floor(t/1000/60%60);
          s=Math.floor(t/1000%60);

          gId("t_d").innerHTML = pluszero(d);
          gId("t_h").innerHTML = pluszero(h);
          gId("t_m").innerHTML = pluszero(m);
          gId("t_s").innerHTML = pluszero(s);   
      };
      
      if(t>=0){
        
        setTime();
      }
      var iSpaceTime = 1000;
    var timer = setInterval(function(){
      if(iTime<=0){
        clearInterval(timer);     
      }
      else
      {
        iTime+=iSpaceTime;   
        
        t = EndTime.getTime() - iTime;  
        
        setTime();
      }
    },iSpaceTime);
};

 $.ajax({
  "url":baseUrl + "/Home/Api/getTimestamp?callback=?",
  "type":"get",
  "dataType":"jsonp",
  "success":function(d){
    //console.log(d.timestamp*1000);
    //console.log(+new Date);   
    GetRTime(d.timestamp*1000);
  }
});
